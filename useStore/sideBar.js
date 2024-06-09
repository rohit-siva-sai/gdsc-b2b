import { create } from "zustand";
import { persist } from "zustand/middleware";

const sideBar = (set) => ({
  linkActive: "",
  titleActive: "",
  newRfq: 0,
  newQuote: 0,
  userChange: 0,

  updateLinkActive: async (value) => set((store) => ({ linkActive: value })),
  updateTitleActive: async (value) => set((store) => ({ titleActive: value })),
  updateNewRfq: async (value) => set((store) => ({ newRfq: Math.random() })),
  updateNewQuote: async (value) => set((store) => ({ newQuote: Math.random() })),
  updateUserChange: async (value) => set((store) => ({ userChange: Math.random() })),

});

export const SideBar = create(sideBar, { name: "sideBar" });
