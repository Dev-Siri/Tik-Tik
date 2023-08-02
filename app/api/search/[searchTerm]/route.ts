import type { RouteHandler } from "@/types";

import client from "@/sanity/lib/client";
import { searchPostsQuery } from "@/utils";

export const dynamic = "force-dynamic";

export const GET: RouteHandler = async (_, { params: { searchTerm } }) => {
  const videosQuery = searchPostsQuery(searchTerm);

  const videos = await client.fetch(videosQuery);

  return new Response(JSON.stringify(videos));
};
