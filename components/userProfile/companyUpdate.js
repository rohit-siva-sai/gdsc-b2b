import React, { useState } from "react";
import CompanyName from "./companyUpdate/companyName";
import BussinessType from "./companyUpdate/bussinessType";
import CompanySize from "./companyUpdate/companySize";
import SellingChannel from "./companyUpdate/sellingChannel";
import AnnualValue from "./companyUpdate/AnnualValue";
import Suppliers from "./companyUpdate/suppliers";
import MarketImport from "./companyUpdate/MarketImport";
import MarketSell from "./companyUpdate/MarketSell";
import PurchasingRole from "./companyUpdate/PurchasingRole";
import PanCardNo from "./companyUpdate/PanCardNo";
import GstNo from "./companyUpdate/GstNo";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Company } from "@/useStore/company";
import { User } from "@/useStore/user";
import { Toaster, toast } from "react-hot-toast";
import { SideBar } from "@/useStore/sideBar";
import { Seller } from "@/useStore/seller";
// import Sellercategory from "../navFoot/sellerCategory";

const CompanyUpdate = ({ getUser }) => {
  const [userId] = User((store) => [store.userId]);
  const [updateUserChange, updateNewRfq] = SideBar((store) => [
    store.updateUserChange,
    store.updateNewRfq,
  ]);
  const [sellerCategory] = Seller((store) => [store.sellerCategory]);
  const [
    company,
    bussinessType,
    companySize,
    sellingChannel,
    annualValue,
    suppliers,
    marketImport,
    marketSell,
    purchasingRole,
    panCardNo,
    gstNo,
    companyUpdate,
    updateOpenCompanyModel,
  ] = Company((store) => [
    store.company,
    store.bussinessType,
    store.companySize,
    store.sellingChannel,
    store.annualValue,
    store.suppliers,
    store.marketImport,
    store.marketSell,
    store.purchasingRole,
    store.panCardNo,
    store.gstNo,
    store.companyUpdate,
    store.updateOpenCompanyModel,
  ]);

  // const [sellerChange, setSellerChange] = useState(sellerCategory);

  const updateUser = async (id) => {
    const userDoc = doc(db, "users", id);

    await updateDoc(userDoc, {
    
      company,
      bussinessType,
      companySize,
      sellingChannel,
      annualValue,
      suppliers,
      marketImport,
      marketSell,
      purchasingRole,
      panCardNo,
      gstNo,
    });

    // if (sellerCategory != sellerChange) {
    //   updateNewRfq();
    //   setSellerChange(sellerCategory);
    // }
    // console.log("updated successfully",data);
    toast.success("Updated Successfully", {
      duration: 500,
      position: "top-center",
      style: {
        background: "black",
        color: "white",
      },
    });
    // await getUser(id);
    updateUserChange();
    updateOpenCompanyModel(false);
  };
  return (
    <div>
      <Toaster />
      <div className="relative">
        <div
          className={`py-3 relative px-4 ${
            companyUpdate == "all" ? " h-[500px]" : "h-[300px]"
          } overflow-y-auto  border-t flex flex-col space-y-2`}
        >
          {(companyUpdate == "companyName" || companyUpdate == "all") && (
            <CompanyName />
          )}

          <div
            className={`grid ${
              companyUpdate == "all" ? "grid-cols-2" : "grid-cols-1"
            }  gap-x-4`}
          >
            {(companyUpdate == "bussinessTupe" || companyUpdate == "all") && (
              <BussinessType />
            )}
            {(companyUpdate == "companySize" || companyUpdate == "all") && (
              <CompanySize />
            )}
          </div>

          {(companyUpdate == "sellingChannel" || companyUpdate == "all") && (
            <SellingChannel />
          )}
          {(companyUpdate == "annualValue" || companyUpdate == "all") && (
            <AnnualValue />
          )}
          {(companyUpdate == "suppliers" || companyUpdate == "all") && (
            <Suppliers />
          )}
          {(companyUpdate == "marketImport" || companyUpdate == "all") && (
            <MarketImport />
          )}
          {(companyUpdate == "marketSell" || companyUpdate == "all") && (
            <MarketSell />
          )}
          {(companyUpdate == "purchasingRole" || companyUpdate == "all") && (
            <PurchasingRole />
          )}
          {(companyUpdate == "panCardNo" || companyUpdate == "all") && (
            <PanCardNo />
          )}
          {(companyUpdate == "gstNo" || companyUpdate == "all") && <GstNo />}
        </div>
        <div
          className="bg-gray-50 sticky flex justify-center -bottom-5  py-2 "
          onClick={() => {
            updateUser(userId);
          }}
        >
          <div className="bg-cyan-500 py-1 px-8 hover:opacity-80 rounded-3xl font-semibold text-white cursor-pointer">
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyUpdate;
