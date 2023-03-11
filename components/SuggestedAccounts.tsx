import lazy from "next/dynamic";

import type { AsyncFC } from "@/types";
import type { FC } from "react";

import { fetchAllUsers } from "@/utils/user";

import { GoVerified } from "@react-icons/all-files/go/GoVerified";

const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

const SuggestedAccounts: AsyncFC = async () => {
  const users = await fetchAllUsers();

  return (
    <article className="lg:border-b-2 border-gray-200 pb-4">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">Suggested Accounts</p>
      {users.slice(0, 6).map(user => (
        <Link href={`/profile/${user._id}`} key={user._id} className="flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded">
          <div className="w-8 h-8">
            <Image src={user?.image || ""} width={34} height={34} className="rounded-full" alt="user profile" />
          </div>
          <div className="hidden xl:block">
            <p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
              {user?.userName.replaceAll(" ", "")}
              <GoVerified className="text-blue-400" />
            </p>
            <p className="capitalize text-gray-400 text-xs">{user?.userName}</p>
          </div>
        </Link>
      ))}
    </article>
  );
};

// Async Component TypeScript workaround for now
// * TEMPORARY
export default SuggestedAccounts as unknown as FC;
