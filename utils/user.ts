import type { CredentialResponse } from "@react-oauth/google";
import type { GoogleUser, SanityUser } from "../types";

export const createOrGetUser = async (response: CredentialResponse, addUser: (user: SanityUser) => void) => {
  const { default: jwtDecode } = await import("jwt-decode");
  const decoded: GoogleUser = jwtDecode(response.credential!);

  const { name, picture, sub } = decoded;

  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  addUser(user);

  await fetch("/api/auth", { method: "POST", body: JSON.stringify(user) });
};
