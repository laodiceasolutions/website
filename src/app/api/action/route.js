import discordApiHandler from "@/lib/discord";

export async function POST(request) {
  const requestJsonBody = await request.json();
  // const { name, email, message, phone } = requestJsonBody;
  const message = JSON.stringify(requestJsonBody);
  try {
    const discordResult = await discordApiHandler(message);

    return new Response(JSON.stringify({ message: 'Mesajınız başarıyla gönderildi', result: discordResult }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Mesaj gönderilirken bir sorun oluştu' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
