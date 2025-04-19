import lazy from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd";

const UserIcon = lazy(() => import("@/components/UserIcon"), { ssr: false });

async function search(formData: FormData) {
  "use server";
  const query = formData.get("query");

  if (!query || query instanceof Blob) return;

  redirect(`/search/${query}?type=accounts`);
}

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/" className="w-[100px] md:w-[130px]">
        <Image src="/logo.png" alt="TikTik" height={512} width={1809} className="cursor-pointer" priority />
      </Link>
      <section className="relative hidden md:block">
        <form action={search} className="absolute md:static top-10 left-20 bg-white">
          <input
            name="query"
            placeholder="Search accounts and videos"
            className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0"
          />
          <button type="submit" className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400">
            <BiSearch />
          </button>
        </form>
      </section>
      <UserIcon>
        <Link href="/upload" className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
          <IoMdAdd className="text-xl" /> {` `}
          <span className="hidden md:block">Upload</span>
        </Link>
      </UserIcon>
    </nav>
  );
}
