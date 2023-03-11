import type { PageComponent, Video } from "@/types";

import NoResults from "@/components/NoResults";
import VideoCard from "@/components/VideoCard";

const getVideos = async (topic: string | null): Promise<Video[]> => {
  const response = await fetch(
    topic ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/discover?topic=${topic}` : `${process.env.NEXT_PUBLIC_BASE_URL}/api/post`,
    {
      cache: "no-store",
    },
  );
  return response.json();
};

const Home: PageComponent = async ({ searchParams: { topic } }) => {
  const videos = await getVideos(topic);

  return (
    <section className="flex flex-col gap-10 videos h-full">
      {videos?.length ? videos.map(video => <VideoCard post={video} key={video._id} />) : <NoResults text="No Videos Found" />}
    </section>
  );
};

export default Home;
