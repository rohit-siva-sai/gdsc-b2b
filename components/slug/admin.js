import React from "react";

import Order from "./adminDetails/order";
import UnitPrice from "./adminDetails/unitPrice";
// import ValidTo from "../rfq/productInfo/validTo";
import Destination from "./adminDetails/message/destination";
import Require from "./adminDetails/message/require";
import { Seller } from "@/useStore/seller";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Progress } from "antd";
import { Toaster, toast } from "react-hot-toast";
import ValidTo from "./adminDetails/validTo";
import { Company } from "@/useStore/company";
import { SideBar } from "@/useStore/sideBar";
import { useState } from "react";
import { Data } from "@/useStore/data";
import { useEffect } from "react";
import { User } from "@/useStore/user";
import { Common } from "@/useStore/common";

const Admin = ({ id, updatedRfqData}) => {
  const [order, unitPrice, requirements, progress, quoteDate, updateProgress] =
    Seller((store) => [
      store.order,
      store.unitPrice,
      store.requirements,
      store.progress,
      store.quoteDate,
      store.updateProgress,
      store.scoreInquiry,
    ]);
  const [user] = Common((store) => [store.user]);
  const [userDetails] = User((store) => [store.userDetails]);
  const [updateNewRfq, updateNewQuote] = SideBar((store) => [
    store.updateNewRfq,
    store.updateNewQuote,
  ]);
  const [singleQuote] = Data((store) => [store.singleQuote]);
  // console.log('single',singleQuote);

  const quotationsCollection = collection(db, "quotations");
  const updateRfqQuotes = async (id) => {
    const rfqDoc = doc(db, "rfqs", id);

    await updateDoc(rfqDoc, {
      quotesReceived: updatedRfqData.quotesReceived
        ? updatedRfqData.quotesReceived + 1
        : 1,
    });
    updateNewRfq();
    console.log("updated successfully");
  };

  const updateQuotation = async (id) => {
    const quoteDoc = doc(db, "quotations",id);

    await updateDoc(quoteDoc, {
      order: order,
      unitPrice: unitPrice,
      requirements: requirements,
      quoteDate: quoteDate,
      quotationScore: progress,
    });
    console.log("updated successfully");
    // toast.success("Updated Successfully", {
    //   duration: 500,
    //   position: "top-center",
    //   style: {
    //     background: "black",
    //     color: "white",
    //   },
    // });
    toast.success("updated Successfully", {
      duration: 1000,
      position: "top-center",
      style: {
        background: "black",
        color: "white",
      },
    });
    updateNewQuote();
  };

  const submitNewQuotation = async () => {
    try {
      await setDoc(doc(quotationsCollection), {
        order: order,
        unitPrice: unitPrice,
        requirements: requirements,
        quoteDate: quoteDate,
        quotationScore: progress,
        rfqId: id,
        user: user.uid,
        sellerDetails: {
          sellerName: userDetails?.username?.firstName,
          sellerEmail: userDetails?.email,
          sellerCompany: userDetails?.company?.companyName,
          sellerPhoneNumber: userDetails?.phoneNumber
        },
        timestamp: new Date(),
      });
      updateNewQuote();
      updateRfqQuotes(id);
      toast.success("Quotation Successfull", {
        duration: 1000,
        position: "top-center",
        style: {
          background: "black",
          color: "white",
        },
      });
    } catch (err) {
      console.log(err, "rohitk skvsman ");
    }
  };
  // console.log("rohit", order, unitPrice, requirements, progress);

  const twoColors = { "0%": "#108ee9", "100%": "#87d068" };

  // useEffect(() => {
  //   if (singleQuote) setProgressValue(singleQuote.quotationScore);
  //   else setProgressValue(progress);
  //   console.log("hii", progressValue);
  // }, [singleQuote]);

  return (
    <>
      <Toaster />
      <div className="md:w-3/5 w-full px-8 bg-white rounded-xl md:h-[900px] h-[1050px] py-4">
        {/* <p className="font-bold text-xl px-6 text-gray-800 mb-4">
  Quotes Received (0 of Maximun 20)
</p> */}
        <Progress
          percent={progress}
          status="active"
          strokeColor={{ from: "#108ee9", to: "#87d068" }}
        />
        <div className="flex flex-col space-y-4">
          <Order />
          <UnitPrice />
          {/* <ValidTo /> */}
          <ValidTo />
          <Require />
          {singleQuote ? (
            <div
              onClick={() => {
                updateQuotation(singleQuote?.id);
              }}
              className="cursor-pointer mt-5 text-base w-fit font-semibold px-7 rounded-md text-white bg-gradient-to-l from-blue-400  to-blue-600 py-2"
            >
              update
            </div>
          ) : (
            <div
              onClick={() => {
                submitNewQuotation();
              }}
              className="cursor-pointer mt-5 text-base w-fit font-semibold px-7 rounded-md text-white bg-gradient-to-l from-blue-400  to-blue-600 py-2"
            >
              Submit
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
