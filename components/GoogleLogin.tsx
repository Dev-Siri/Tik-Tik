"use client";
import { GoogleLogin as ReactGoogleLogin, type CredentialResponse } from "@react-oauth/google";

import useAuthStore from "@/store/authStore";

export default function GoogleLogin() {
  const { addUser } = useAuthStore();

  async function handleSuccess(response: CredentialResponse) {
    const { createOrGetUser } = await import("@/utils");

    await createOrGetUser(response, addUser);
  }

  return <ReactGoogleLogin onSuccess={handleSuccess} onError={() => alert("Failed to Login. Please try again later.")} />;
}
