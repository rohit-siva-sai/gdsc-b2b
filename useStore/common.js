import { create } from "zustand";
import { persist } from "zustand/middleware";

const common = (set) => ({
  showLogin: false,
  user: null,
  userId: null,
  showSideBar: false,

  changeShowLogin: async (value) => set((store) => ({ showLogin: value })),
  updateShowSideBar: async (value) => set((store) => ({ showSideBar: value })),
  updateUser: async (value) => set((store) => ({ user: value })),
  updateUserId: async (value) => set((store) => ({ userId: value })),
});

export const Common = create(common, { name: "common" });
