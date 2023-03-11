"use client";
import { useEffect, useState, type FC } from "react";

import type { LikeButtonProps } from "../types";

import useAuthStore from "@/store/authStore";

import { MdFavorite } from "@react-icons/all-files/md/MdFavorite";

const LikeButton: FC<LikeButtonProps> = ({ likes, postId }) => {
  const filteredLikes = likes?.filter(like => like._ref === userProfile?._id);
  const { userProfile } = useAuthStore();

  const [alreadyLiked, setAlreadyLiked] = useState(filteredLikes?.length > 0);
  const [displayedLikes, setDisplayedLikes] = useState(likes);

  const handleLike = async (like: boolean) => {
    if (!userProfile) return;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/like`, {
      body: JSON.stringify({
        userId: userProfile._id,
        postId,
        like,
      }),
    });
    const { likes } = await response.json();

    setDisplayedLikes(likes);
  };

  useEffect(() => {
    setAlreadyLiked(filteredLikes?.length > 0);
  }, [likes, filteredLikes]);

  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLiked ? (
          <button className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]" onClick={() => handleLike(false)}>
            <MdFavorite className="text-lg md:text-2xl" />
          </button>
        ) : (
          <button className="bg-primary rounded-full p-2 md:p-4" onClick={() => handleLike(true)}>
            <MdFavorite className="text-lg md:text-2xl" />
          </button>
        )}
        <p className="text-md font-semibold">{displayedLikes?.length || 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
