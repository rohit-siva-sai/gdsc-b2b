import Message from "@/components/rfq/message";
import Product from "@/components/rfq/product";
import Score from "@/components/rfq/score";
import { db } from "@/config/firebase";
import { Common } from "@/useStore/common";
import { useStore } from "@/useStore/details";

import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

const Rfq = () => {
  const [changeShowLogin,user] = Common((store)=>[store.changeShowLogin,store.user])
  

  const [
    productName,
    productCategory,
    attributes,
    aboutProduct,
    sourcingType,
    order,
    unitPrice,
    rfqDate,
    requirements,
    email,
    progress,
    updateProgress
  ] = useStore((store) => [
    store.productName,
    store.productCategory,
    store.attributes,
    store.aboutProduct,
    store.sourcingType,
    store.order,
    store.unitPrice,
    store.rfqDate,
    store.requirements,
    store.email,
    store.progress,
    store.updateProgress
  ]);
const router = useRouter()
  const rfqCollection = collection(db, "rfqs");
  //  console.log('product category',attributes);
  // const updateUserRfq = async (id) => {
  //   const userDoc = doc(db, "users", id)

  //   await updateDoc(userDoc, { rfq: "sdhjvsdjhvsjh" });
  //   console.log("updated successfully");
  //   // getUser(id)
  // };

  const submitNewUser = async () => {
    try {
      await setDoc(doc(rfqCollection), {
        productName: productName,
        productCategory: productCategory,
        attributes: attributes,
        aboutProduct: aboutProduct,
        sourcingType: sourcingType,
        order: order,
        unitPrice: unitPrice,
        rfqDate: rfqDate,
        requirements: requirements,
        email: email,
        rfqScore: progress,
        user: user.uid,
        timestamp: new Date()
      })
      
    } catch (err) {
      console.log(err);
    }
  };
  // console.log('ass',user);

  return (
    <div className="bg-gray-50 py-6 md:py-12">
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 md:grid-cols-12 md:gap-x-7 px-2  md:px-36">
        <div className="md:col-span-9 bg-white md:px-8 px-2  py-6 rounded-lg border">
          <Product />
          <div
            onClick={() => {
              !user && changeShowLogin(true)
              user && email!=0 && submitNewUser()
               updateProgress()
               
              user && router.push("/myRfq/rfqList")
              
            }}
            // onClick={submitNewUser}
            className="mx-4 cursor-pointer mt-5 text-base w-fit font-semibold px-7 rounded-md text-white bg-gradient-to-l from-cyan-400  to-cyan-600 py-2"
          >
            Submit
          </div>
          
        </div>
        <div className="border bg-white col-span-3">
          <Score />
        </div>
      </div>
    </div>
  );
};

export default Rfq;
