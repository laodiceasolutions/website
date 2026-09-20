import { validateContactPayload, verifyCaptcha } from "@/lib/contact/validation.mjs";
import discordApiHandler from "@/lib/discord";

const attempts = new Map();
const WINDOW_MS = 60_000;
const MAX_ATTEMPTS = 5;

function isRateLimited(key) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > MAX_ATTEMPTS;
}

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const validation = validateContactPayload(body);
  if (!validation.success) {
    return Response.json({ error: "invalid_fields", fields: validation.errors }, { status: 400 });
  }

  const captchaValid = await verifyCaptcha({ token: validation.value.captchaToken, remoteIp: ip });
  if (!captchaValid) {
    return Response.json({ error: "captcha_failed" }, { status: 400 });
  }

  const { captchaToken: _captchaToken, ...message } = validation.value;
  try {
    await discordApiHandler(JSON.stringify(message));
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact delivery failed", error);
    return Response.json({ error: "delivery_failed" }, { status: 502 });
  }
}
