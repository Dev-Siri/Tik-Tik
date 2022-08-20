import type { SanityUser } from './';

type AuthStore = (set: StoreApi['setState']) => ({
    userProfile: SanityUser | null,
    allUsers: SanityUser[],
    addUser: (user: SanityUser) => void,
    removeUser: () => void,
    fetchAllUsers: () => Promise<void>
})

export default AuthStore;