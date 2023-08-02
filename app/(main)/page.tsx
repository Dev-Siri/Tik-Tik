import NoResults from "@/components/NoResults";
import VideoCard from "@/components/VideoCard";

import type { Video } from "@/types";

interface Props {
  searchParams: { topic: string };
}

export const dynamic = "force-dynamic";

export default async function Home({ searchParams: { topic } }: Props) {
  const response = await fetch(
    topic ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/discover?topic=${topic}` : `${process.env.NEXT_PUBLIC_BASE_URL}/api/post`,
    {
      cache: "no-store",
    },
  );
  const videos: Video[] = await response.json();

  return (
    <section className="flex flex-col gap-10 videos h-full">
      {videos?.length ? videos.map(video => <VideoCard post={video} key={video._id} />) : <NoResults text="No Videos Found" />}
    </section>
  );
}
