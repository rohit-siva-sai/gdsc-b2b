import { create } from "zustand";
import { persist } from "zustand/middleware";

const seller = (set) => ({
  progress: 20,
  sellerCategory: null,
  openUserModel: false,
  initialRequirements: {
    destinationPort: "",
    shipmentTerms: "",
    paymentMethod: "",
    message: "",
  },
  requirements: {
    destinationPort: "",
    shipmentTerms: "",
    paymentMethod: "",
    message: "",
  },
  initialOrder: { orderQuantity: null, orderType: "Bags",estimatedQuantity: null },
  order: { orderQuantity: null, orderType: "Bags",estimatedQuantity: null },
  initialUnitPrice: { unitType: "USD", units: null },
  unitPrice: { unitType: "Rupay", units: null },
  quoteDate : {quotePostedDate: "",quoteExpireDate: "" },
  scoreInquiry: [
    {
      label: "Estmated Order Quantity",
      marks: "20",
      score: false,
    },
    {
      label: "Preferred Unit Price",
      marks: "20",
      score: false,
    },
    {
      label: "Valid To",
      marks: "20",
      score: false,
    },
    {
      label: "Email",
      marks: "10",
      score: false,
    },
    {
      label: "Destination Port",
      marks: "15",
      score: false,
    },
  
    {
      label: "Payment Methods",
      marks: "10",
      score: false,
    },
    {
      label: "Required Company",
      marks: "10",
      score: false,
    },
  ],
  validTo: "",

  updateQuoteDate: async (value) => set((store) => ({ quoteDate: value })),
  updateIncreaseProgress: async (number) =>
    set((store) => ({
      progress: store.progress + 5 > 100 ? 100 : store.progress + number,
    })),
  updateDecreaseProgress: async (number) =>
    set((store) => ({
      progress: store.progress - 10 < 0 ? 0 : store.progress - number,
    })),
  updateSellerCategory: async (value) =>
    set((store) => ({ sellerCategory: value })),
  updateOpenUserModel: async (value) =>
    set((store) => ({ openUserModel: value })),
  updateOrder: async (value) => set((store) => ({ order: value })),
  updateUnitPrice: async (value) => set((store) => ({ unitPrice: value })),
  updateProgress: async (value) => set((store) => ({ progress: value })),
  // updateValidTo: async (valid) => set((store) => ({ validTo: valid })),
  updateRequirements: async (require) =>
    set((store) => ({ requirements: require })),
  updateInitialOrder: async (value) => set((store) => ({ order: store.initialOrder })),
  updateInitailUnitPrice: async (value) => set((store) => ({ unitPrice: store.initialUnitPrice })),
  
  updateInitialRequirements: async (require) =>
    set((store) => ({ requirements: store.initialRequirements })),
});

export const Seller = create(seller, { name: "seller" });
