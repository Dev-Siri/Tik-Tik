import lazy from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { SanityUser, Video } from "@/types";

import useAuthStore from "@/store/authStore";

import client from "@/sanity/lib/client";
import { allUsersQuery } from "@/utils";
import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";
import { GoVerified } from "@react-icons/all-files/go/GoVerified";
import { HiVolumeOff } from "@react-icons/all-files/hi/HiVolumeOff";
import { HiVolumeUp } from "@react-icons/all-files/hi/HiVolumeUp";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";

import Comments from "./comments";
import SideView from "./side-view";
const LikeButton = lazy(() => import("@/components/LikeButton"));

interface Props {
  params: { id: string };
}

async function getVideo(postId: string): Promise<Video> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${postId}`, { cache: "no-store" });
  return response.json();
}

export default async function Detail({ params: { id } }: Props) {
  const [post, users] = await Promise.all([getVideo(id), client.fetch<SanityUser[] | null>(allUsersQuery)]);

  const { userProfile } = useAuthStore.getState();

  if (!post) notFound();

  return (
    <section className="flex w-full absolute left-0 -mt-6 bg-white no-scrollbar">
      <SideView
        icons={{
          play: <BsFillPlayFill className="text-white text-6xl lg:text-8xl" />,
          cancel: <MdCancel className="text-white text-[35px]" />,
          muted: <HiVolumeOff className="text-white text-2xl lg:text-4xl" />,
          volumeUp: <HiVolumeUp className="text-white text-2xl lg:text-4xl" />,
        }}
        url={post.video.asset.url}
      />
      <article className="relative w-[1000px] md:w-[900px] lg:w-[700px]">
        <div className="lg:mt-20 mt-10">
          <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
            <Link href="/" className="ml-4 md:w-20 md:h-20 w-16 h-16">
              <Image width={62} height={62} className="rounded-full" src={post.postedBy.image} alt="profile photo" />
            </Link>
            <Link href="/" className="mt-3 flex flex-col gap-2">
              <p className="flex gap-2 items-center md:text-md font-bold text-primary">
                {post.postedBy.userName} {` `}
                <GoVerified className="text-blue-400 text-md" />
              </p>
              <p className="capitalize font-medium text-xs text-gray-500 hidden md:block">{post.postedBy.userName}</p>
            </Link>
          </div>
          <p className="px-10 text-lg text-gray-600">{post.caption}</p>
          <div className="mt-10 px-10">{userProfile && <LikeButton likes={post.likes} postId={post?._id} />}</div>
          <Comments comments={post.comments} users={users ?? []} postId={post._id} />
        </div>
      </article>
    </section>
  );
}
