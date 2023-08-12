"use client";
import useAuthStore from "@/store/authStore";

import { AiOutlineLogout } from "@react-icons/all-files/ai/AiOutlineLogout";

export default function Logout() {
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
}
