import Link from "next/link";
import React from "react";
import RfqSteps from "./rfqSteps";
import { useState } from "react";
import { useStore } from "@/useStore/details";
import { useEffect } from "react";
import Category from "./productInfo/category";
import Attribute from "./productInfo/attribute";
import About from "./productInfo/about";
import Order from "./productInfo/order";
import UnitPrice from "./productInfo/unitPrice";
import ValidTo from "./productInfo/validTo";
import Email from "./email";
import Require from "./productInfo/requirements/require";
import ProductName from "./productInfo/productName";
import Sourcing from "./productInfo/sourcing";
import { Checkbox } from "antd";
import Attachment from "./productInfo/attachment";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter()
  const [updateIncreaseProgress, updateDecreaseProgress, productName, score,productCategory] =
    useStore((store) => [
      store.updateIncreaseProgress,
      store.updateDecreaseProgress,
      store.productName,
      store.score,
      store.productCategory
    ]);
  const [proName, setProName] = useState(productName);
  const [checked, setChecked] = useState(false);
  const [i, setI] = useState(1);
  // console.log("require", requirements);
  const rfqCollection = collection(db, "rfq_entries");
  const [rfq_entriesData,setRfq_entriesData] = useState()


  const getRfqEntries = async (id) => {
    try {
      const data = await getDocs(rfqCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // const rfq = filteredData.filter((item) => item.user == user.uid);
     setRfq_entriesData(filteredData)
     console.log("ssassa",filteredData)
      // console.log("usedatadfinprofile", userData[0]);
      // const sliceData = userData[0];
      // console.log(sliceData, "slicedata");

      // setProfileUser(sliceData);
      // console.log("rohit siva sai", profileUser);
      // // getCurrentUser(profileUser)
      // if (sliceData && sliceData.id === id) return true;
      // else return false;
    } catch (err) {
      console.log(err.message);
    }
  };

  const func = () => {
    score.map((item) => {
      return item ? updateIncreaseProgress(5) : updateDecreaseProgress(5);
    });
  };
  useEffect(()=>{
    getRfqEntries()
  },[router])

  return (
    <div className="">
      <div className="">
        <p className="text-2xl md:text-3xl font-semibold text-gray-800">
          Request for Quotations- RFQ
        </p>
        <RfqSteps />
        <div className="px-4 flex flex-col space-y-6">
          <ProductName />
          <Category categoryData={rfq_entriesData} />
          <Attribute category={productCategory && productCategory[2]} />
          <About />
          {/* <Attachment/> */}
          {/* <Sourcing /> */}
          <div className="flex flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-8">
            <Order />
            <UnitPrice />
          </div>
          <ValidTo />
          <Require />
          <Email />
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
