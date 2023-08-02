import client from "@/sanity/lib/client";
import { postDetailQuery } from "@/utils";

export const dynamic = "force-dynamic";

interface Params {
  params: { id: string };
}

export async function GET(_: Request, { params: { id } }: Params) {
  const query = postDetailQuery(id);

  const data = await client.fetch(query);

  return new Response(JSON.stringify(data[0]));
}

export async function PUT(request: Request, { params: { id } }: Params) {
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
}
