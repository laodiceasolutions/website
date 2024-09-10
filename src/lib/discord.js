// /pages/api/discord.js
export default async function discordApiHandler(message) {

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL; // Store your webhook URL in .env

  try {
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: message
      }),
    };
    console.log({ payload });
    const response = await fetch(webhookUrl, payload);

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const resultMessage = await response.text();
      return resultMessage;
    }
  } catch (error) {
    return error;
  }
}
