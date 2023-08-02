import client from "@/sanity/lib/client";
import { allUsersQuery } from "@/utils";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await client.fetch(allUsersQuery());

  if (data) {
    return new Response(JSON.stringify(data));
  } else {
    return new Response("[]", { status: 404 });
  }
}
