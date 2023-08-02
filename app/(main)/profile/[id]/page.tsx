import Image from "next/image";
import Link from "next/link";

import type { Video } from "@/types";

import NoResults from "@/components/NoResults";
import VideoCard from "@/components/VideoCard";
import { GoVerified } from "@react-icons/all-files/go/GoVerified";

interface Props {
  params: { id: string };
  searchParams: {
    type: "recent" | "liked";
  };
}

export default async function Profile({ params: { id }, searchParams: { type = "recent" } }: Props) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/${id}`);
  const { user, userLikedVideos, userVideos } = await response.json();
  const showUserVideos = type === "recent";
  const videosList: Video[] = showUserVideos ? userVideos : userLikedVideos;

  return (
    <article className="w-full">
      <section className="flex gap-6 md:gap-10 mb-4 bg-white w-full">
        <div className="w-16 h-16 md:w-32 md:h-32">
          <Image src={user?.image || ""} width={120} height={120} className="rounded-full" alt="user profile" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="flex md:text-2xl tracking-wider justify-center gap-1 items-center text-md font-bold text-primary lowercase">
            {user?.userName.replaceAll(" ", "")}
            <GoVerified className="text-blue-400" />
          </p>
          <p className="capitalize md:text-xl text-gray-400 text-xs">{user?.userName}</p>
        </div>
      </section>
      <section className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
        <Link
          className={`text-xl font-semibold cursor-pointer mt-2 ${showUserVideos ? "border-b-2 border-black" : "text-gray-400"}`}
          href={`/profile/${id}?type=recent`}
        >
          Videos
        </Link>
        <Link
          className={`text-xl font-semibold cursor-pointer mt-2 ${!showUserVideos ? "border-b-2 border-black" : "text-gray-400"}`}
          href={`/profile/${id}?type=liked`}
        >
          Liked
        </Link>
      </section>
      <section className="flex gap-6 flex-wrap md:justify-start">
        {videosList.length > 0 ? (
          videosList.map((video, index) => <VideoCard post={video} key={index} />)
        ) : (
          <NoResults text={`No ${showUserVideos ? "" : "liked"} videos yet`} />
        )}
      </section>
    </article>
  );
}
