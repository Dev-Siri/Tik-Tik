import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { AuthStore } from "../types";

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
