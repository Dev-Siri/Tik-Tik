import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { SanityUser } from "@/types";

interface AuthStore {
  userProfile: SanityUser | null;
  addUser(user: SanityUser): void;
  removeUser(): void;
}

const useAuthStore = create(
  persist<AuthStore>(
    set => ({
      userProfile: null,
      addUser: user => set({ userProfile: user }),
      removeUser: () => set({ userProfile: null }),
    }),
    { name: "auth" },
  ),
);

export default useAuthStore;
