// /pages/api/discord.js
export default async function discordApiHandler(message) {

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL; // Store your webhook URL in .env

  if (!webhookUrl) throw new Error("DISCORD_WEBHOOK_URL is not configured");

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: message
      }),
    };
    const response = await fetch(webhookUrl, payload);

    if (!response.ok) {
      const resultMessage = await response.text();
      throw new Error(`Discord webhook failed (${response.status}): ${resultMessage}`);
    }

    if (response.status === 204) return { ok: true };
    return response.json();
}
