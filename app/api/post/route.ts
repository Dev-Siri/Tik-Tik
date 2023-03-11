import { allPostsQuery, client } from "@/utils";

import type { RouteHandler } from "@/types";

export const GET: RouteHandler = async () => {
  const query = allPostsQuery();

  const data = await client.fetch(query);

  return new Response(JSON.stringify(data));
};

export const POST: RouteHandler = async request => {
  const document = await request.json();

  await client.create(document);

  return new Response("Video Created", { status: 201 });
};
