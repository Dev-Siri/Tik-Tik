import client from './client';
import {
  topics,
  footerList1,
  footerList2,
  footerList3,
  BASE_URL
} from './constants';
import {
  allPostsQuery,
  postDetailQuery,
  searchPostsQuery,
  singleUserQuery,
  allUsersQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
  topicPostsQuery
} from './queries';

import createOrGetUser from './user';

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
  BASE_URL,
  createOrGetUser
}