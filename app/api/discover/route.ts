import client from "@/sanity/lib/client";
import { topicPostsQuery } from "@/utils";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const topic = url.searchParams.get("topic");

  if (!topic) return new Response("[]", { status: 400 });

  const videosQuery = topicPostsQuery(topic);

  const videos = await client.fetch(videosQuery);

  return new Response(JSON.stringify(videos));
}
