const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const DEVELOPMENT_TYPES = new Set(["webDevelopment", "mobileDevelopment", "productDesign"]);

/** @param {unknown} value */
function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

/** @param {Record<string, unknown> | null | undefined} payload */
export function validateContactPayload(payload) {
  const value = {
    name: clean(payload?.name),
    email: clean(payload?.email).toLowerCase(),
    details: clean(payload?.details),
    developmentType: clean(payload?.developmentType),
    captchaToken: clean(payload?.captchaToken),
  };

  const errors = [];
  if (value.name.length < 2 || value.name.length > 100) errors.push("name");
  if (value.email.length > 254 || !EMAIL_PATTERN.test(value.email)) errors.push("email");
  if (value.details.length < 10 || value.details.length > 3000) errors.push("details");
  if (!DEVELOPMENT_TYPES.has(value.developmentType)) errors.push("developmentType");

  return { success: errors.length === 0, value, errors };
}

/** @param {{token: string, remoteIp?: string}} options */
export async function verifyCaptcha({ token, remoteIp }) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret && process.env.NODE_ENV !== "production") return true;
  if (!secret || !token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });
  if (!response.ok) return false;

  const result = await response.json();
  const expectedHostname = process.env.RECAPTCHA_EXPECTED_HOSTNAME;
  return Boolean(result.success && (!expectedHostname || result.hostname === expectedHostname));
}
