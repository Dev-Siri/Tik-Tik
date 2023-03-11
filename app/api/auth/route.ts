import { client } from "@/utils";

import type { RouteHandler } from "@/types";

export const POST: RouteHandler = async request => {
  const user = await request.json();

  await client.createIfNotExists(user);

  return new Response("OK", { status: 201 });
};
