import React, { FC, useState, useEffect } from 'react';
import { MdFavorite } from 'react-icons/md';
import useAuthStore from '../store/authStore';
import type { LikeButtonProps } from '../types';

const LikeButton: FC<LikeButtonProps> = ({ handleLike, handleDislike, likes }) => {
  const [alreadyLiked, setAlreadyLiked] = useState(true);
  const { userProfile } = useAuthStore();
  const filteredLikes = likes?.filter(like => like._ref === userProfile?._id);

  useEffect(() => {
    if(filteredLikes?.length > 0) setAlreadyLiked(true);
    else setAlreadyLiked(false);
  }, [likes, filteredLikes]);
  
  return (
    <div className='flex gap-6'>
      <div className='mt-4 flex flex-col justify-center items-center cursor-pointer'>
        {alreadyLiked ? (
          <div className='bg-primary rounded-full p-2 md:p-4 text-[#F51997]' onClick={handleDislike}>
            <MdFavorite className='text-lg md:text-2xl' />
          </div>
        ) : (
          <div className='bg-primary rounded-full p-2 md:p-4' onClick={handleLike}>
            <MdFavorite className='text-lg md:text-2xl' />
          </div>
        )}
        <p className='text-md font-semibold'>
          {likes?.length || 0}
        </p>
      </div>
    </div>
  );
}

export default LikeButton;