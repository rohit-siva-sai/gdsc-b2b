import { create } from "zustand";
import { persist } from "zustand/middleware";

const user = (set) => ({
  username: { firstName: "", lastName: "" },
  job: { jobTitle: "",jobCategory: "",jobLevel: ""},
  userAddress: { bussinessAddress: "", city: "", state: "", pincode: null,country: "" },
  country: "",
  companyWebsite: "",
  linkedinProfile: "",
  phoneNumber: "",
  userId: null,
  userEmail: null,
  userDetails: {},
  userUpdate: "",
  openUserModel: false,
  
  updateUserName: async (user) => set((store) => ({ username: user })),
  updateOpenUserModel: async (value) => set((store) => ({ openUserModel: value })), 
  updateUserUpdate: async (value) => set((store) => ({ userUpdate: value })),
  updateAddress: async (value) => set((store) => ({ userAddress: value })),
  updateUserEmail: async (email) => set((store) => ({ userEmail: email })),
  updateCountry: async (country) => set((store) => ({ country: country })),
  updatePhoneNumber: async (phoneNumber) =>
    set((store) => ({ phoneNumber: phoneNumber })),
  updateUserId: async (value) => set((store) => ({ userId: value })),
  updateJob: async (title) => set((store) => ({ job: title })),
  updateUserDetails: async (user) => set((store) => ({ userDetails: user })),
  updateCompanyWebsite: async (url) =>
    set((store) => ({ companyWebsite: url })),
  updateLinkedinProfile: async (profile) =>
    set((store) => ({ linkedinProfile: profile })),
});

export const User = create(user, { name: "user" });
