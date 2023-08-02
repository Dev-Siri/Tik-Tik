import "../styles/globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

const title = "Tik Tik";
const description = "Tik tik is a tik tok like video sharing app";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    siteName: title,
    description,
    images: "/favicon.png",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  },
  twitter: {
    title,
    description,
    images: "/favicon.png",
    creator: "Dev-Siri",
    site: process.env.NEXT_PUBLIC_BASE_URL,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
