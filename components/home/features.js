import React from "react";
import ItemCard from "./itemCard";
const array = [
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/02_Bulk-Discount.png",
    title: "Bulk Discounts",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/07_Business-Analytics-Tools.png",
    title: "Bussiness Analytics",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/05_Compliance-Tools.png",
    title: "Compliance Tools",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/03_Bilk-Purchase.png",
    title: "Bulk Purchasing",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/09_Business-Pan_A.png",
    title: "Bussiness pan",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/06_Shipping_Delivery.png",
    title: "Shipping & Delivery",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/10_Payment-Methods.png",
    title: "Payment Methods",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/04_Account-Security.png",
    title: "Account Security",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/01_GST.png",
    title: "GST Invoice",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/08_Mobile-App.png",
    title: "Mobile App",
    link: "",
  },
];

const Features = () => {
  return (
    <div className="px-40  bg-gray-100">
      <p className="font-semibold pb-10 text-center text-gray-800 text-3xl">
        Key Features
      </p>
      <div className="grid grid-cols-4 gap-y-10  gap-x-10">
        {array.map((item) => {
          return <ItemCard imgUrl={item.imgUrl} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default Features;
