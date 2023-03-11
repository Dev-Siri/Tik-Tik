import lazy from "next/dynamic";

import type { FC } from "react";

import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd";

const UserIcon = lazy(() => import("@/components/UserIcon"), { ssr: false });
const SearchBar = lazy(() => import("@/components/SearchBar"));
const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

const Navbar: FC = () => (
  <nav className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
    <Link href="/" className="w-[100px] md:w-[130px]">
      <Image src="/logo.png" alt="TikTik" height={512} width={1809} className="cursor-pointer" priority />
    </Link>
    <section className="relative hidden md:block">
      <SearchBar />
    </section>
    <UserIcon>
      <Link href="/upload" className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
        <IoMdAdd className="text-xl" /> {` `}
        <span className="hidden md:block">Upload</span>
      </Link>
    </UserIcon>
  </nav>
);

export default Navbar;
