import lazy from "next/dynamic";

import type { PropsWithChildren } from "react";

import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GoogleOAuthProvider from "./google-oauth-provider";

const SuggestedAccounts = lazy(() => import("@/components/SuggestedAccounts"));
const Sidebar = lazy(() => import("@/components/Sidebar"));

export default function MainLayout({ children }: PropsWithChildren) {
  return (
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
  );
}
