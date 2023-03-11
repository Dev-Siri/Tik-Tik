import type { SanityUser } from "./";

export interface AuthStore {
  userProfile: SanityUser | null;
  addUser(user: SanityUser): void;
  removeUser(): void;
}
