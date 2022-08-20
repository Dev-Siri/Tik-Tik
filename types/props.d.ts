import Video, { Like, Comment } from "./video";
import { SanityUser } from "./user";
import React from "react";

export interface HomeProps { videos: Video[]; }
export interface VideoCardProps { post: Video; }
export interface NoResultsProps { text: string; }
export interface DetailProps { postDetails: Video; }
export interface FetcherProps { params: { id: string; searchTerm?: string; }}
export interface QueryFetcherProps { query: { topic: string; }};
export interface LayoutProps { children: React.ReactNode }
export interface SearchProps { videos: Video[]; }
export interface LikeButtonProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: Like[];
}
export interface ListProps {
  items: string[];
  mt: boolean;
}
export interface CommentsProps {
  comments: Comment[];
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  addComment: (submitEvent: any) => any;
  isPostingComment: boolean;
}
export interface ProfileProps {
  data: {
    user: SanityUser,
    userVideos: Video[],
    userLikedVideos: Video[]
  }
}