import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import type { NextPage } from 'next';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { FetcherProps, SearchProps } from '../../types';
import VideoCard from '../../components/VideoCard';
import NoResults from '../../components/NoResults';
import { BASE_URL } from '../../utils';
import useAuthStore from '../../store/authStore';

const Search: NextPage<SearchProps> = ({ videos }) => {
  const [isAccounts, setisAccounts] = useState(false);

  const { allUsers } = useAuthStore();
  const router = useRouter();
  const { searchTerm }: any = router.query;

  const accounts = isAccounts ? 'border-b-2 border-black' : 'text-gray-400';
  const isVideos = !isAccounts ? 'border-b-2 border-black' : 'text-gray-400';
  const searchedAccounts = useMemo(() => allUsers.filter(user => user.userName.toLowerCase().includes(searchTerm?.toLowerCase())), [searchTerm]);

  return (
    <div className='w-full'>
      <div className='flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full'>
        <p className={`text-xl font-semibold cursor-pointer mt-2 ${accounts}`} onClick={() => setisAccounts(true)}>
          Accounts
        </p>
        <p className={`text-xl font-semibold cursor-pointer mt-2 ${isVideos}`} onClick={() => setisAccounts(false)}>
          Videos
        </p>
      </div>
      {isAccounts ? (
        <div className='md:mt-16'>
          {searchedAccounts?.length > 0 ? (
            searchedAccounts.map((user, index) => (
              <Link href={`/profile/${user._id}`} key={index}>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded border-b-2 border-gray-200'>
                  <div>
                    <Image
                      src={user?.image || ""}
                      width={50}
                      height={50}
                      className='rounded-full'
                      alt='user profile'
                    />
                  </div>
                  <div className='hidden xl:block'>
                    <p className='flex gap-1 items-center text-md font-bold text-primary lowercase'>
                      {user?.userName.replaceAll(' ', '')}
                      <GoVerified className='text-blue-400' />
                    </p>
                    <p className='capitalize text-gray-400 text-xs'>
                      {user?.userName}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <NoResults text={`No account results for ${searchTerm}`} />
          )}
        </div>
      ) : (
        <div className='md:mt-16 flex flex-wrap gap-6 md:justify-start'>
          {videos?.length ? (
            videos.map((video, index) => (
              <VideoCard post={video} key={index} />
            ))
          ) : (
            <NoResults text={`No video results for ${searchTerm}`} />
          )}
        </div>
      )}
    </div>
  );
}

export const getServerSideProps = async ({ params: { searchTerm } }: FetcherProps) => {
  const response = await axios.get(`${BASE_URL}/api/search/${searchTerm}`);

  return {
    props: { videos: response.data }
  }
}

export default Search;