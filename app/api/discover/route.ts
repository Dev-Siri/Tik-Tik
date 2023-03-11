import type { RouteHandler } from "@/types";

import { client, topicPostsQuery } from "@/utils";

export const GET: RouteHandler = async request => {
  const topic = request.nextUrl.searchParams.get("topic") as string;

  const videosQuery = topicPostsQuery(topic);

  const videos = await client.fetch(videosQuery);

  return new Response(JSON.stringify(videos));
};
