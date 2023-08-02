import { client } from "@/utils";

export const dynamic = "force-dynamic";

export async function PATCH(request: Request) {
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
}
