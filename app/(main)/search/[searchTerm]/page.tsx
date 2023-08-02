import lazy from "next/dynamic";

import type { Video } from "@/types";

import { fetchAllUsers } from "@/utils/user";

import NoResults from "@/components/NoResults";
import VideoCard from "@/components/VideoCard";
import { GoVerified } from "@react-icons/all-files/go/GoVerified";

const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

interface Props {
  params: { searchTerm: string };
  searchParams: { type: string };
}

async function getSearchResults(searchTerm: string): Promise<Video[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${searchTerm}`);
  return response.json();
}

export default async function Search({ params: { searchTerm }, searchParams: { type } }: Props) {
  const [videos, users] = await Promise.all([getSearchResults(searchTerm), fetchAllUsers()]);
  const isAccounts = type === "accounts";

  const searchedAccounts = users.filter(user => user.userName.toLowerCase().includes(searchTerm?.toLowerCase()));

  return (
    <article className="w-full">
      <section className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
        <Link
          className={`text-xl font-semibold cursor-pointer mt-2 ${isAccounts ? "border-b-2 border-black" : "text-gray-400"}`}
          href={`/search/${searchTerm}?type=accounts`}
        >
          Accounts
        </Link>
        <Link
          className={`text-xl font-semibold cursor-pointer mt-2 ${!isAccounts ? "border-b-2 border-black" : "text-gray-400"}`}
          href={`/search/${searchTerm}?type=videos`}
        >
          Videos
        </Link>
      </section>
      {isAccounts ? (
        <section className="md:mt-16">
          {searchedAccounts?.length > 0 ? (
            searchedAccounts.map((user, index) => (
              <Link href={`/profile/${user._id}`} key={index}>
                <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded border-b-2 border-gray-200">
                  <div>
                    <Image src={user?.image || ""} width={50} height={50} className="rounded-full" alt="user profile" />
                  </div>
                  <div className="hidden xl:block">
                    <p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
                      {user?.userName.replaceAll(" ", "")}
                      <GoVerified className="text-blue-400" />
                    </p>
                    <p className="capitalize text-gray-400 text-xs">{user?.userName}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <NoResults text={`No account results for ${searchTerm}`} />
          )}
        </section>
      ) : (
        <section className="md:mt-16 flex flex-wrap gap-6 md:justify-start">
          {videos?.length ? (
            videos.map((video: any, index: any) => <VideoCard post={video} key={index} />)
          ) : (
            <NoResults text={`No video results for ${searchTerm}`} />
          )}
        </section>
      )}
    </article>
  );
}
