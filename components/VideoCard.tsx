import lazy from "next/dynamic";

import type { FC } from "react";
import type { VideoCardProps } from "../types";

import { GoVerified } from "@react-icons/all-files/go/GoVerified";

const VideoPlayer = lazy(() => import("@/components/VideoPlayer"));
const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

const VideoCard: FC<VideoCardProps> = ({ post }) => (
  <article className="flex flex-col border-b-2 border-gray-200 pb-6">
    <section className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
      <Link href={`/profile/${post.postedBy._id}`} className="md:w-16 md:h-16 w-10 h-10">
        <Image width={62} height={62} className="rounded-full" src={post?.postedBy?.image || ""} alt="Profile photo" />
      </Link>
      <Link href={`/profile/${post.postedBy._id}`} className="flex items-center gap-2">
        <p className="flex gap-2 items-center md:text-md font-bold text-primary">
          {post?.postedBy?.userName} <br />
          <GoVerified className="text-blue-400 text-md" />
        </p>
        <p className="capitalize font-medium text-xs text-gray-500 hidden md:block">{post?.postedBy?.userName}</p>
      </Link>
    </section>
    <VideoPlayer postId={post._id} url={post.video.asset.url} />
  </article>
);

export default VideoCard;
