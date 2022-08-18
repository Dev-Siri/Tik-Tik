import create from 'zustand';
import { persist } from 'zustand/middleware';
import type { StoreApi } from 'zustand';
import type { AuthStore } from '../types';
import axios from 'axios';

import { BASE_URL } from '../utils';

const authStore: AuthStore = (set: StoreApi['setState']) => ({
  userProfile: null,
  allUsers: [],
  addUser: (user) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
  async fetchAllUsers() {
    const response = await axios.get(`${BASE_URL}/api/users`);

    set({ allUsers: response.data });
  }
});

const useAuthStore = create(
  persist(authStore, { name: 'auth' })
);

export default useAuthStore;