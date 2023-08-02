import type { RouteHandler } from "@/types";

import client from "@/sanity/lib/client";
import { topicPostsQuery } from "@/utils";

export const dynamic = "force-dynamic";

export const GET: RouteHandler = async request => {
  const topic = request.nextUrl.searchParams.get("topic") as string;

  const videosQuery = topicPostsQuery(topic);

  const videos = await client.fetch(videosQuery);

  return new Response(JSON.stringify(videos));
};
