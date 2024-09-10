'use server';

import { redirect } from "next/navigation";
import discordApiHandler from "./discord";

export async function postContactUs(formData) {
  const message = JSON.stringify(Object.fromEntries([...formData.entries()]), {});
  const discordResult = await discordApiHandler(message);
  console.log({ discordResult, message });
  redirect('/')
}