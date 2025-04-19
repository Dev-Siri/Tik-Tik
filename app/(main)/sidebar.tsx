import Link from "next/link";

import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import Discover from "./discover";
import Footer from "./footer";
import SuggestedAccounts from "./suggested-accounts";

const normalLink = "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded";

export default function Sidebar() {
  return (
    <aside className="h-[92vh] overflow-hidden xl:hover:overflow-auto no-scrollbar">
      <label htmlFor="sidebar-toggle" className="block cursor-pointer xl:hidden m-2 ml-4 mt-3 text-xl">
        <AiOutlineMenu />
      </label>
      <input type="checkbox" name="sidebar-toggle" id="sidebar-toggle" className="hidden" defaultChecked />
      <section id="sidebar-main" className="xl:w-400 w-20 flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
        <div className="xl:border-b-2 border-gray-200 xl:pb-4">
          <Link href="/" className={normalLink}>
            <p className="text-2xl">
              <AiFillHome />
            </p>
            <span className="text-xl hidden xl:block">For you</span>
          </Link>
        </div>
        <Discover />
        <SuggestedAccounts />
        <Footer />
      </section>
    </aside>
  );
}
