import type { RouteHandler } from "@/types";

import client from "@/sanity/lib/client";
import { postDetailQuery } from "@/utils";

export const dynamic = "force-dynamic";

export const GET: RouteHandler = async (_, { params: { id } }) => {
  const query = postDetailQuery(id);

  const data = await client.fetch(query);

  return new Response(JSON.stringify(data[0]));
};

export const PUT: RouteHandler = async (request, { params: { id } }) => {
  const { comment, userId } = await request.json();

  const data = await client
    .patch(id)
    .setIfMissing({ comments: [] })
    .insert("after", "comments[-1]", [
      {
        comment,
        _key: crypto.randomUUID(),
        postedBy: {
          _type: "postedBy",
          _ref: userId,
        },
      },
    ])
    .commit();

  return new Response(JSON.stringify({ newComment: data }));
};
