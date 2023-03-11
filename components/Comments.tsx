"use client";
import { GoVerified } from "@react-icons/all-files/go/GoVerified";
import lazy from "next/dynamic";
import { useState, type FC, type FormEventHandler } from "react";

import type { CommentsProps } from "@/types";

import useAuthStore from "@/store/authStore";

import NoResults from "./NoResults";

const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

const Comments: FC<CommentsProps> = ({ comments, users, postId }) => {
  const { userProfile } = useAuthStore();

  const [displayedComments, setDisplayedComments] = useState(comments);
  const [isPostingComment, setIsPostingComment] = useState(false);
  const [comment, setComment] = useState("");

  const addComment: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    if (!userProfile && !comment) return;

    setIsPostingComment(true);

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: userProfile?._id,
        comment,
      }),
    });

    const { comments } = await response.json();

    setDisplayedComments(comments);
    setComment("");
    setIsPostingComment(false);
  };

  return (
    <article className="border-t-2 border-gray-200 pt-4 px-10 bg-[#F8F8F8] border-b-2 lg:pb-0 pb-[100px]">
      <ul suppressHydrationWarning className="overflow-scroll no-scrollbar lg:h-[475px]">
        {displayedComments?.length ? (
          displayedComments.map(item =>
            users.map(
              user =>
                (user._id === item.postedBy._id || item.postedBy._ref) && (
                  <li suppressHydrationWarning className="p-2 items-center" key={item._key}>
                    <Link href={`/profile/${user._id}`} className="flex items-start gap-3">
                      <Image src={user?.image || ""} width={34} height={34} className="rounded-full" alt="user profile" />
                      <div className="hidden xl:block">
                        <p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
                          {user?.userName.replaceAll(" ", "")}
                          <GoVerified className="text-blue-400" />
                        </p>
                        <p className="capitalize text-gray-400 text-xs">{user?.userName}</p>
                      </div>
                    </Link>
                    <p>{item.comment}</p>
                  </li>
                ),
            ),
          )
        ) : (
          <NoResults text="No comments yet!" />
        )}
      </ul>
      {userProfile && (
        <section className="absolute bottom-0 left-0 pb-6 px-2 md:px-10">
          <form className="flex gap-4" onSubmit={addComment}>
            <input
              placeholder="Add comment"
              value={comment}
              onChange={event => setComment(event.target.value)}
              type="text"
              className="rounded-lg bg-primary px-6 py-4 text-medium font-medium border-2 w-[40vw] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1"
            />
            <button type="submit" className="text-md text-gray-400">
              {isPostingComment ? "Commenting..." : "Comment"}
            </button>
          </form>
        </section>
      )}
    </article>
  );
};

export default Comments;
