import type { RouteHandler } from "@/types";

import client from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

export const POST: RouteHandler = async request => {
  const user = await request.json();

  await client.createIfNotExists(user);

  return new Response("OK", { status: 201 });
};
