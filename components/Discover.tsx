"use client";
import lazy from "next/dynamic";
import { useSearchParams } from "next/navigation";

import type { FC } from "react";

import { topics } from "../utils";

const Link = lazy(() => import("next/link"));

const activeTopicStyle =
  "xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997] px-";
const topicStyle =
  "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black";

const Discover: FC = () => {
  const params = useSearchParams();

  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">Popular Topics</p>
      <div className="flex gap-3 flex-wrap">
        {topics.map(item => (
          <Link href={`/?topic=${item.name}`} key={item.name} className={params?.get("topic") === item.name ? activeTopicStyle : topicStyle}>
            <span className="font-bold text-2xl xl:text-md">{item.icon}</span>
            <span className="font-medium text-md hidden xl:block capitalize">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
