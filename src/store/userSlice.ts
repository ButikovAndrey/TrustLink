import { StateCreator } from "zustand";

export interface UserSlice {
  user: { id: string; name: string } | null;
  setUser: (user: UserSlice["user"]) => void;
  clearUser: () => void;
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set
) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
});
