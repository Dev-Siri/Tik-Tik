import lazy from "next/dynamic";
import "../styles/globals.css";

import type { LayoutComponent } from "@/types";
import type { Metadata } from "next";

import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const GoogleOAuthProvider = lazy(() => import("@/components/GoogleOAuthProvider"));
const SuggestedAccounts = lazy(() => import("@/components/SuggestedAccounts"));
const Sidebar = lazy(() => import("@/components/Sidebar"));

export const metadata: Metadata = {
  title: "Tik Tik",
  description: "Tik tik is a tik tok like video sharing app",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tik Tik",
    siteName: "Tik Tik",
    description: "Tik tik is a tik tok like video sharing app",
    images: "https://tik-tik-siri.vercel.app/favicon.png",
    url: "https://tik-tik-siri.vercel.app",
  },
  twitter: {
    title: "Tik Tik",
    description: "Tik tik is a tik tok like video sharing app",
    images: "https://tik-tik-siri.vercel.app/favicon.png",
    creator: "Dev-Siri",
    site: "https://tik-tik-siri.vercel.app",
  },
  icons: {
    shortcut: "https://tik-tik-siri.vercel.app/favicon.ico",
  },
};

const RootLayout: LayoutComponent = ({ children }) => (
  <html lang="en">
    <body>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN!}>
        <Navbar />
        <div className="flex gap-6 md:gap-20">
          <Sidebar>
            <Discover />
            <SuggestedAccounts />
            <Footer />
          </Sidebar>
          <main className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] no-scrollbar flex-1">{children}</main>
        </div>
      </GoogleOAuthProvider>
    </body>
  </html>
);

export default RootLayout;
