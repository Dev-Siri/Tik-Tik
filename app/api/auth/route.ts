import client from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const user = await request.json();

  await client.createIfNotExists(user);

  return new Response("OK", { status: 201 });
}
