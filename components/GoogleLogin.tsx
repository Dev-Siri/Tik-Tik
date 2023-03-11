"use client";
import type { FC } from "react";

import useAuthStore from "@/store/authStore";

import { GoogleLogin as ReactGoogleLogin, type CredentialResponse } from "@react-oauth/google";

const GoogleLogin: FC = () => {
  const { addUser } = useAuthStore();

  const handleSuccess = async (response: CredentialResponse) => {
    const { createOrGetUser } = await import("@/utils");

    await createOrGetUser(response, addUser);
  };

  return <ReactGoogleLogin onSuccess={handleSuccess} onError={() => alert("Failed to Login. Please try again later.")} />;
};

export default GoogleLogin;
