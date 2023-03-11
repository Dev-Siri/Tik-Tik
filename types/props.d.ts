import type { ReactNode } from "react";
import type { Comment, Like, Video } from "./video";

export interface HomeProps {
  videos: Video[];
}

export interface VideoCardProps {
  post: Video;
}

export interface ConditionalUserProps {
  children: ReactNode;
}

export interface UserIconProps {
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

export interface ListProps {
  items: string[];
  mt: boolean;
}

export interface VideoPlayerProps {
  url: string;
  postId: string;
}
export interface BiggerVideoPlayerProps extends Omit<VideoPlayerProps, "postId"> {}

export interface SidebarProps {
  children: ReactNode;
}

export interface CommentsProps {
  comments: Comment[];
  users: SanityUser[];
  postId: string;
}

export interface InfiniteItems {
  [key: string]: any;
}

export interface PageProps {
  params: InfiniteItems;
  searchParams: InfiniteItems;
}

export interface LayoutProps {
  children: ReactNode;
}
