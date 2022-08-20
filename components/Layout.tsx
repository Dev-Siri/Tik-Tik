import React, { FC } from 'react';
import Head from 'next/head';
import type { LayoutProps } from '../types';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tik tik is a tik tok like video sharing app" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tik Tik" />
        <meta property="og:description" content="Tik tik is a tik tok like video sharing app" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://tik-tik-dev-siri.vercel.app" />
        <meta property="og:site_name" content="Tik Tik" />
        <meta name="twitter:title" content="Tik Tik" />
        <meta name="twitter:description" content="Tik tik is a tik tok like video sharing app" />
        <meta name="twitter:image" content="/favicon.png" />
        <meta name="twitter:site" content="https://tik-tik-dev-siri.vercel.app" />
        <meta name="twitter:creator" content="Dev-Siri" />
        <link rel="canonical" href="https://tik-tik-dev-siri.vercel.app" />
        <link rel="icon" href="/favicon.png" />
        <title>Tik Tik</title>
      </Head>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;