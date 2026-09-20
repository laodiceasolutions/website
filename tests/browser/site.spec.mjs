import { expect, test } from "@playwright/test";

for (const locale of ["tr", "en"]) {
  test(`${locale} landing page has canonical metadata and landmarks`, async ({ page }) => {
    await page.goto(`/${locale}`);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.laodiceasolutions.com/${locale}`);
    await expect(page.locator("title")).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /index, follow/);
    await expect(page.locator("main#main-content")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator("footer")).toHaveCount(1);
  });
}

test("root redirects to the Turkish locale", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/tr$/);
});

test("rendered JSON-LD is parseable and article dates match visible content", async ({ page }) => {
  await page.goto("/en/blog/what-we-can-do-for-you/product-design");
  const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
  const documents = jsonLd.map((value) => JSON.parse(value));
  const graph = documents.flatMap((document) => document["@graph"] || [document]);
  const posting = graph.find((node) => node["@type"] === "BlogPosting");
  const webpage = graph.find((node) => node["@type"] === "WebPage");
  expect(posting).toBeTruthy();
  expect(webpage).toBeTruthy();
  expect(posting.mainEntityOfPage["@id"]).toBe(webpage["@id"]);
  const visibleDate = new Date(`${posting.datePublished}T12:00:00Z`).toLocaleString("en-US", { dateStyle: "medium" });
  await expect(page.locator("article header")).toContainText(`Published on ${visibleDate}`);
});

test("robots and sitemap expose only canonical, successful routes", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Sitemap: https://www.laodiceasolutions.com/sitemap.xml");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  const body = await sitemap.text();
  const urls = [...body.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  expect(urls.length).toBeGreaterThan(0);
  expect(new Set(urls).size).toBe(urls.length);
  expect(urls.some((value) => value.endsWith("/blog/what-we-can-do-for-you"))).toBe(false);
  for (const value of urls) {
    const url = new URL(value);
    expect(url.origin).toBe("https://www.laodiceasolutions.com");
    expect((await request.get(url.pathname)).status()).toBe(200);
  }
});

test("duplicate blog indexes redirect while article routes remain available", async ({ request }) => {
  for (const locale of ["tr", "en"]) {
    const duplicate = await request.get(`/${locale}/blog/what-we-can-do-for-you`, { maxRedirects: 0 });
    expect([307, 308]).toContain(duplicate.status());
    expect(duplicate.headers().location).toBe(`/${locale}/blog`);
    expect((await request.get(`/${locale}/blog/what-we-can-do-for-you/product-design`)).status()).toBe(200);
  }
});

test("declared icons and manifest assets are publicly available", async ({ request }) => {
  for (const path of [
    "/manifest.webmanifest",
    "/images/favicon-16x16.png",
    "/images/favicon-32x32.png",
    "/images/apple-touch-icon.png",
    "/images/android-chrome-192x192.png",
    "/images/android-chrome-384x384.png",
  ]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
  }
  const manifest = await (await request.get("/manifest.webmanifest")).json();
  expect(manifest.icons).toHaveLength(2);
});

test("project metadata and WebPage schema use the visible product name", async ({ page }) => {
  await page.goto("/en/project/lsCRM");
  await expect(page).toHaveTitle("LS CRM | Laodicea Solutions");
  await expect(page.getByRole("heading", { name: "LS CRM", level: 1 })).toBeVisible();
  const documents = (await page.locator('script[type="application/ld+json"]').allTextContents()).map((value) => JSON.parse(value));
  const webpage = documents.flatMap((document) => document["@graph"] || [document]).find((node) => node["@type"] === "WebPage");
  expect(webpage.name).toBe("LS CRM");
});

test("placeholder routes remain excluded from indexing", async ({ page }) => {
  await page.goto("/en/test");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex, nofollow/);
  await page.goto("/en/blog/article/product-design");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex, nofollow/);
});

test("mobile navigation reports state and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en");
  const trigger = page.getByRole("button", { name: "Open main menu" });
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  const dialog = page.getByRole("dialog", { name: "Mobile navigation" });
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Close main menu" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  const focusRemainsInDialog = await dialog.evaluate((element) =>
    element === document.activeElement || element.contains(document.activeElement),
  );
  expect(focusRemainsInDialog).toBe(true);
  await page.keyboard.press("Escape");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(trigger).toBeFocused();
  const pageOverflows = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(pageOverflows).toBe(false);
});

test("language disclosures have unique relationships and restore focus", async ({ page }) => {
  await page.goto("/en");
  const selectors = page.locator('button[aria-label="Choose language"]');
  await expect(selectors).toHaveCount(2);
  const ids = await selectors.evaluateAll((buttons) => buttons.map((button) => button.id));
  expect(new Set(ids).size).toBe(ids.length);

  const desktopSelector = page.getByRole("button", { name: "Choose language" });
  await desktopSelector.click();
  const controlledId = await desktopSelector.getAttribute("aria-controls");
  await expect(page.locator(`[id="${controlledId}"]`)).toBeVisible();
  await expect(page.getByRole("button", { name: "EN", exact: true })).toHaveAttribute("aria-current", "true");
  await page.keyboard.press("Escape");
  await expect(desktopSelector).toHaveAttribute("aria-expanded", "false");
  await expect(desktopSelector).toBeFocused();
});

test("contact form has persistent labels and an accessible submit action", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email", { exact: true })).toBeVisible();
  await expect(page.getByLabel("Project Detail")).toBeVisible();
  const serviceChoices = page.getByRole("radio");
  await expect(serviceChoices).toHaveCount(3);
  await expect(serviceChoices.first()).toBeChecked();
  await serviceChoices.first().focus();
  await page.keyboard.press("ArrowRight");
  await expect(serviceChoices.nth(1)).toBeChecked();
  await expect(page.getByRole("button", { name: "Send message" })).toBeVisible();
  await expect(page.locator("form")).toHaveAttribute("aria-busy", "false");
});

test("hero explains the offering and presents a clear CTA hierarchy", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByText("Custom CRM, ERP, finance, web, mobile, and embedded software for businesses of every size.")).toBeVisible();
  const hero = page.locator("main > section").first();
  await expect(hero.getByRole("link", { name: "Contact Us", exact: true })).toHaveAttribute("href", "/en#contactUs");
  const workLink = hero.getByRole("link", { name: "View our work" });
  await expect(workLink).toHaveAttribute("href", "/en#project");
  await workLink.click();
  await expect(page).toHaveURL(/#project$/);
  const projectHeadingTop = await page.getByRole("heading", { name: "Projects", level: 2 }).evaluate(
    (element) => element.getBoundingClientRect().top,
  );
  expect(projectHeadingTop).toBeGreaterThanOrEqual(0);
});

test("route navigation indicates the current Blog and Projects destinations", async ({ page }) => {
  await page.goto("/en/blog");
  const blogNavigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(blogNavigation.getByRole("link", { name: "Blog", exact: true })).toHaveAttribute("aria-current", "page");
  await expect(blogNavigation.getByRole("link", { name: "Projects", exact: true })).not.toHaveAttribute("aria-current", "page");

  await page.goto("/en/project");
  const projectNavigation = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(projectNavigation.getByRole("link", { name: "Projects", exact: true })).toHaveAttribute("aria-current", "page");
});

test("project cards expose localized actions and intentional mobile scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/tr");
  await expect(page.getByText("Yakında").first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Devamını Oku: LS CRM/ })).toContainText("Devamını Oku");
  const snapType = await page.locator("#project ul").first().evaluate((element) => getComputedStyle(element).scrollSnapType);
  expect(snapType).toContain("x");
});

test("footers expose contact details, the current year, and do not overflow on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const path of ["/en", "/en/blog"]) {
    await page.goto(path);
    await expect(page.locator('footer a[href="mailto:hello@laodiceasolutions.com"]')).toBeVisible();
    await expect(page.locator("footer")).toContainText(`© ${new Date().getFullYear()} Laodicea Solutions`);
    const pageOverflows = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(pageOverflows).toBe(false);
  }
});

test("landmarks, image alternatives, and interactive target sizes remain accessible", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("banner")).toHaveCount(1);
  await expect(page.getByRole("main")).toHaveCount(1);
  await expect(page.getByRole("contentinfo")).toHaveCount(1);
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await expect(page.locator('img[alt="wire"], img[alt="Asteriks"], img[alt^="Illustration"]')).toHaveCount(0);
  const duplicateIds = await page.evaluate(() => {
    const ids = [...document.querySelectorAll("[id]")].map((element) => element.id);
    return ids.filter((id, index) => ids.indexOf(id) !== index);
  });
  expect(duplicateIds).toEqual([]);
  const undersizedSocialTargets = await page.locator('footer a[target="_blank"]').evaluateAll((links) =>
    links.filter((link) => {
      const box = link.getBoundingClientRect();
      return box.width < 44 || box.height < 44;
    }).length,
  );
  expect(undersizedSocialTargets).toBe(0);

  await page.goto("/en/project/lsCRM");
  await expect(page.getByRole("banner")).toHaveCount(1);
  await expect(page.getByRole("main")).toHaveCount(1);
  await expect(page.getByRole("contentinfo")).toHaveCount(1);
  await expect(page.getByRole("img", { name: "LS CRM" })).toBeVisible();
});

test("language focus treatment remains visibly contrasted", async ({ page }) => {
  await page.goto("/en");
  const selector = page.getByRole("button", { name: "Choose language" });
  await selector.focus();
  const boxShadow = await selector.evaluate((element) => getComputedStyle(element).boxShadow);
  expect(boxShadow).toContain("20, 122, 58");
});

test("responsive layouts do not overflow at common viewport widths", async ({ page }) => {
  for (const width of [390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/en", "/en/blog"]) {
      await page.goto(path);
      const overflows = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      expect(overflows, `${path} at ${width}px`).toBe(false);
    }
  }
});

test("reduced motion disables nonessential component transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en");
  await page.getByRole("button", { name: "Open main menu" }).click();
  const duration = await page.getByRole("dialog", { name: "Mobile navigation" }).evaluate(
    (element) => getComputedStyle(element).transitionDuration,
  );
  expect(["0s", "0.00001s", "1e-05s"]).toContain(duration);
  const scrollBehavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  expect(scrollBehavior).toBe("auto");
});

test("unknown locale and project return 404", async ({ request }) => {
  expect((await request.get("/fr")).status()).toBe(404);
  expect((await request.get("/en/project/not-a-project")).status()).toBe(404);
});

test("representative routes have no hydration or runtime console issues", async ({ page }) => {
  const issues = [];
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) issues.push(`${message.type()}: ${message.text()}`);
  });
  page.on("pageerror", (error) => issues.push(`pageerror: ${error.message}`));

  for (const path of ["/tr", "/en/blog", "/en/project/lsCRM", "/en/blog/what-we-can-do-for-you/product-design"]) {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
  }

  expect(issues).toEqual([]);
});
