import type { NextPage } from 'next';
import axios from 'axios';

import type { HomeProps, QueryFetcherProps } from '../types';
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';
import { BASE_URL } from '../utils';

const Home: NextPage<HomeProps> = ({ videos }) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos?.length ? (
        videos.map(video => (
          <VideoCard post={video} key={video._id} />
        ))
      ) : (
        <NoResults text='No Videos Found' />
      )}
    </div>
  );
}

export const getServerSideProps = async ({ query: { topic } }: QueryFetcherProps) => {
  let response = null;
  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    response = await axios.get(`${BASE_URL}/api/post`);
  }

  return {
    props: { videos: response?.data }
  }
}

export default Home;