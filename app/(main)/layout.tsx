import type { PropsWithChildren } from "react";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

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
