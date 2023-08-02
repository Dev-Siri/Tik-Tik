import type { RouteHandler } from "@/types";

import client from "@/sanity/lib/client";
import { singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery } from "../../../../utils";

export const dynamic = "force-dynamic";

export const GET: RouteHandler = async (_, { params: { id } }) => {
  const query = singleUserQuery(id);
  const userVideoQuery = userCreatedPostsQuery(id);
  const userLikedVideoQuery = userLikedPostsQuery(id);

  const [users, userVideos, userLikedVideos] = await Promise.all([
    client.fetch(query),
    client.fetch(userVideoQuery),
    client.fetch(userLikedVideoQuery),
  ]);

  return new Response(JSON.stringify({ user: users[0], userVideos, userLikedVideos }));
};
