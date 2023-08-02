"use client";
import lazy from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import type { PropsWithChildren } from "react";

import useAuthStore from "@/store/authStore";

const GoogleLogin = lazy(() => import("@/components/GoogleLogin"));
const Logout = lazy(() => import("@/components/Logout"));

export default function UserIcon({ children }: PropsWithChildren) {
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
}
