import { client, searchPostsQuery } from "@/utils";

import type { RouteHandler } from "@/types";

export const GET: RouteHandler = async (_, { params: { searchTerm } }) => {
  const videosQuery = searchPostsQuery(searchTerm);

  const videos = await client.fetch(videosQuery);

  return new Response(JSON.stringify(videos));
};
