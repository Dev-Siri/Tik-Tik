import type { ReactNode } from "react";
import type { Like, Video } from "./video";

export interface HomeProps {
  videos: Video[];
}

export interface VideoCardProps {
  post: Video;
}

export interface ConditionalUserProps {
  children: ReactNode;
}

export interface NoResultsProps {
  text: string;
}

export interface QueryFetcherProps {
  query: { topic: string };
}

export interface LayoutProps {
  children: ReactNode;
}

export interface SearchProps {
  videos: Video[];
}

export interface LikeButtonProps {
  likes: Like[];
  postId: string;
}
