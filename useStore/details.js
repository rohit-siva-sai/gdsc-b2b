import { create } from "zustand";
import { persist } from "zustand/middleware";
const details = (set) => ({
  progress: 2,

  productName: "",
  productCategory: "",
  attributes: { application: "", service: "", surface: "", technic: "" },
  aboutProduct: "",
  sourcingType: "",
  order: { orderQuantity: null, orderType: "Bags" },
  unitPrice: { unitType: "USD", units: null },
  validTo: "",
  requirements: {
    destinationPort: "",
    shipmentTerms: "",
    paymentMethod: "",
    company: "",
  },
  rfqDate : {rfqPostedDate: "",rfqExpireDate: "" },
  email: null,
  rfqScore: 0,
  score: [false, false, false, false, false, false,false,false,false],
  scoreProduct: [
    { 
      label: "Product Name",
      marks: "10",
      score: false
    },
    { 
      label: "Product Category",
      marks: "10",
      score: false
    },
    { 
      label: "About Your Product",
      marks: "43 - 53",
      score: false
    },
    
    
    { 
      label: "Estmated Order Quantity",
      marks: "6",
      score: false
    },
    { 
      label: "Preferred Unit Price",
      marks: "6",
      score: false
    },
    { 
      label: "Valid To",
      marks: "8",
      score: true
    },
    { 
      label: "Email",
      marks: "5",
      score: false
    },
  ],
  scoreRequire: [
    { 
      label: "Destination Port",
      marks: "5",
      score: false
    },
   
    { 
      label: "Payment Methods",
      marks: "5",
      score: false
    },
    { 
      label: "Required Company",
      marks: "6",
      score: false
    },
    
  ],
  
  productDetails: {},

  //   totalIncome: null,
  //   loan: { loanAmount: 1000, loanPurpose: "" },
  //   username: { firstName: "", lastName: "" },
  //   phoneNumber: "",
  //   userId: "",
  //   userEmail: null,
  //   panCardNo: null,
  //   userAddress: { street: "", city: "", state: "", zip: null },
  //   userDetails:  {},
  //   intrestRate: 10 / 12 / 100,

  updateIncreaseProgress: async (number) =>
    set((store) => ({
      progress: store.progress + 5 > 100 ? 100 : store.progress + number,
    })),
  updateDecreaseProgress: async (number) =>
    set((store) => ({
      progress: store.progress - 10 < 0 ? 0 : store.progress - number,
    })),
  updateRfqDate: async (value) => set((store) => ({ rfqDate: value })),
  updateProductName: async (name) => set((store) => ({ productName: name })),
  updateRfqScore: async (score) => set((store) => ({ rfqScore: score })),
  updateProductCategory: async (category) =>
    set((store) => ({ productCategory: category })),
  updateAttributes: async (attr) => set((store) => ({ attributes: attr })),
  updateAboutProduct: async (about) =>
    set((store) => ({ aboutProduct: about })),
  updateSourcingType: async (type) => set((store) => ({ sourcingType: type })),
  updateOrder: async (value) => set((store) => ({ order: value })),

  updateEmail: async (user) => set((store) => ({ email: user })),
  updateUnitPrice: async (value) => set((store) => ({ unitPrice: value })),

  updateValidTo: async (valid) => set((store) => ({ validTo: valid })),
  updateRequirements: async (require) =>
    set((store) => ({ requirements: require })),
  updateProductDetails: async (details) =>
    set((store) => ({ productDetails: details })),
  updateProgress: async (user) => set((store) => ({ progress: 0 })),
  updateScore: async (array) => set(() => ({ score: array })),
  // set(
  //   produce((store) => ({
  //     principalAmount: (amount * time * 10) / 1000,
  //   })),
  //   false,
  //   "amountChange"
  // ),
});

export const useStore = create(details, { name: "details" });
