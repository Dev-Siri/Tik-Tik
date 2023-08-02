import type { PropsWithChildren } from "react";

import Sidebar from "@/components/Sidebar";
import Navbar from "./navbar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <Sidebar />
        <main className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] no-scrollbar flex-1">{children}</main>
      </div>
    </>
  );
}
