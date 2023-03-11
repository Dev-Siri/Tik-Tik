import client from "./client";
import { footerList1, footerList2, footerList3, topics } from "./constants";
import {
  allPostsQuery,
  allUsersQuery,
  postDetailQuery,
  searchPostsQuery,
  singleUserQuery,
  topicPostsQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
} from "./queries";

import { createOrGetUser } from "./user";

export {
  client,
  allPostsQuery,
  postDetailQuery,
  searchPostsQuery,
  singleUserQuery,
  allUsersQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
  topicPostsQuery,
  topics,
  footerList1,
  footerList2,
  footerList3,
  createOrGetUser,
};
