import { create } from "zustand";
import { persist } from "zustand/middleware";

const data = (set) => ({
  quoteData: null,
  singleQuote: null,
 

  updateQuoteData: async (value) => set((store) => ({ quoteData: value })),
  updateSingleQuote: async (value) => set((store) => ({ singleQuote: value })),
//   filterRfqData: async (value) => set((store) => ({ quoteData: store.quoteData })),
 

});

export const Data = create(data, { name: "data" });
