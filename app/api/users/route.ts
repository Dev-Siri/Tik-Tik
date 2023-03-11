import { allUsersQuery, client } from "@/utils";

import type { RouteHandler } from "@/types";

export const GET: RouteHandler = async () => {
  const data = await client.fetch(allUsersQuery());

  if (data) {
    return new Response(JSON.stringify(data));
  } else {
    return new Response("[]", { status: 404 });
  }
};
