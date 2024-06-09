import { create } from "zustand";
import { persist } from "zustand/middleware";

const company = (set) => ({
  company: { companyName: "", year: null },
  bussinessType: "",
  companySize: "",
  sellingChannel: [],
  annualValue: "",
  suppliers: [],
  marketImport: [],
  marketSell: [],
  purchasingRole: "",
  gstNo: "",
  panCardNo: "",
  comapanyDetails: {},
  openCompanyModel: false,
  companyUpdate: "",


  updateCompany: async (value) => set((store) => ({ company: value })),
  updateCompanyUpdate: async (value) => set((store) => ({ companyUpdate: value })),
  updateOpenCompanyModel: async (value) => set((store) => ({ openCompanyModel: value })),
  updateBussinessType: async (value) => set((store) => ({ bussinessType: value })),
  updateCompanySize: async (value) => set((store) => ({ companySize: value })),
  updateAnnualValue: async (value) => set((store) => ({ annualValue: value })),
  updateSellingChannel: async (value) => set((store) => ({ sellingChannel: value })),
  updateSuppliers: async (value) =>
    set((store) => ({ suppliers: value })),
  updateMarketImport: async (value) => set((store) => ({ marketImport: value })),
  updateMarketSell: async (value) => set((store) => ({ marketSell: value })),
  updateCompanyDetails: async (value) => set((store) => ({ comapanyDetails: value })),
  updatePurchasingRole: async (value) =>
    set((store) => ({ purchasingRole: value })),
  updateGstNo: async (value) =>
    set((store) => ({ gstNo: value })),
  updatePanCardNo: async (value) =>
    set((store) => ({ panCardNo: value })),
  
});

export const Company = create(company, { name: "company" });
