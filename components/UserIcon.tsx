"use client";
import lazy from "next/dynamic";

import type { UserIconProps } from "@/types";
import type { FC } from "react";

import useAuthStore from "@/store/authStore";

const GoogleLogin = lazy(() => import("@/components/GoogleLogin"));
const Logout = lazy(() => import("@/components/Logout"));
const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

const UserIcon: FC<UserIconProps> = ({ children }) => {
  const { userProfile } = useAuthStore();

  return userProfile ? (
    <section className="flex gap-5 md:gap-10">
      {children}
      <Link href={`/profile/${userProfile._id}`}>
        <Image width={40} height={40} className="rounded-full cursor-pointer" src={userProfile.image} alt="Profile photo" />
      </Link>
      <Logout />
    </section>
  ) : (
    <GoogleLogin />
  );
};

export default UserIcon;
