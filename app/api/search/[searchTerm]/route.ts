import client from "@/sanity/lib/client";
import { searchPostsQuery } from "@/utils";

export const dynamic = "force-dynamic";

interface Params {
  params: { searchTerm: string };
}

export async function GET(_: Request, { params: { searchTerm } }: Params) {
  const videosQuery = searchPostsQuery(searchTerm);

  const videos = await client.fetch(videosQuery);

  return new Response(JSON.stringify(videos));
}
