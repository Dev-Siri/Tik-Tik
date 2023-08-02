import client from "@/sanity/lib/client";
import { allPostsQuery } from "@/utils";

export const dynamic = "force-dynamic";

export async function GET() {
  const query = allPostsQuery();

  const data = await client.fetch(query);

  return new Response(JSON.stringify(data));
}

export async function POST(request: Request) {
  const document = await request.json();

  await client.create(document);

  return new Response("Video Created", { status: 201 });
}
