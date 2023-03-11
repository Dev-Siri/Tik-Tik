import { client } from "@/utils";

import type { RouteHandler } from "@/types";

export const PATCH: RouteHandler = async request => {
  const { userId, postId, like } = await request.json();

  const data = like
    ? await client
        .patch(postId)
        .setIfMissing({ likes: [] })
        .insert("after", "likes[-1]", [
          {
            _key: crypto.randomUUID(),
            _ref: userId,
          },
        ])
        .commit()
    : await client
        .patch(postId)
        .unset([`likes[_ref=="${userId}"]`])
        .commit();

  return new Response(JSON.stringify(data));
};
