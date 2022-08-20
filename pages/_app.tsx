import '../styles/globals.css';
import React, { FC, useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if(isSSR) return null;

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <Layout>
        <Navbar />
        <div className='flex gap-6 md:gap-20'>
          <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto no-scrollbar'>
            <Sidebar />
          </div>
          <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] no-scrollbar flex-1'>
            <Component {...pageProps} />
          </div>
        </div>
      </Layout>
    </GoogleOAuthProvider>
  );
}

export default MyApp;