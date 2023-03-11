"use client";
import type { FC } from "react";

import useAuthStore from "@/store/authStore";

import { AiOutlineLogout } from "@react-icons/all-files/ai/AiOutlineLogout";

const Logout: FC = () => {
  const { removeUser } = useAuthStore();

  return (
    <button
      type="button"
      className="px-2"
      onClick={async () => {
        const { googleLogout } = await import("@react-oauth/google");

        googleLogout();
        removeUser();
      }}
    >
      <AiOutlineLogout color="red" fontSize={21} />
    </button>
  );
};

export default Logout;
