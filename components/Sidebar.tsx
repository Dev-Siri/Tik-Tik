"use client";
import { useState, type FC } from "react";
import Link from "next/link";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { ImCancelCircle } from "@react-icons/all-files/im/ImCancelCircle";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";
import type { SidebarProps } from "@/types";

const normalLink = "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded";

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <aside className="h-[92vh] overflow-hidden xl:hover:overflow-auto no-scrollbar">
      <div className="block xl:hidden m-2 ml-4 mt-3 text-xl" onClick={() => setShowSideBar(prevShowSideBar => !prevShowSideBar)}>
        {showSideBar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSideBar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For you</span>
              </div>
            </Link>
          </div>
          {children}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
