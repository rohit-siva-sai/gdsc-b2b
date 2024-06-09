
import SimpleSideBar from "@/components/myRfq/simpleSideBar";
import Admin from "@/components/slug/admin";
import RequestDetails from "@/components/slug/requestDetails";
import { db } from "@/config/firebase";
import { Data } from "@/useStore/data";
import { Seller } from "@/useStore/seller";
import { User } from "@/useStore/user";
import { Drawer } from "antd";
import { doc, getDoc, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Post = ({ updatedRfqData, user }) => {
  const router = useRouter();
  const [singleQuote, setSingleQuote] = useState({});

  const [showFilter, setShowFilter] = useState(false);
  const [quoteData, updateSingleQuote] = Data((store) => [
    store.quoteData,
    store.updateSingleQuote,
  ]);
  const [
    updateOrder,
    updateUnitPrice,
    updateRequirements,
    updateQuoteDate,
    updateProgress,
  ] = Seller((store) => [
    store.updateOrder,
    store.updateUnitPrice,
    store.updateRequirements,
    store.updateQuoteDate,
    store.updateProgress,
  ]);
  const [userId,userDetails] = User((store) => [store.userId,store.userDetails]);

  const QuoteFind = () => {
    const data = quoteData?.filter(
      (item) => item.rfqId === router.query.slug && item.user == userId
    );
    if (data?.length > 0) {
      setSingleQuote(data[0]);
      updateSingleQuote(data[0]);
      updateOrder(data[0].order);
      updateUnitPrice(data[0].unitPrice);
      updateRequirements(data[0].requirements);
      updateProgress(data[0].quotationScore);
      console.log("data", data[0]);
    }
    else
    {
      updateSingleQuote(null)
    }

    // console.log("data", data);
  };

  const onClose = () => {
    setShowFilter(false);
  };
  const showDrawer = () => {
    setShowFilter(!showFilter);
  };
  const [rfqData, setRfqData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getRfq = async (id) => {
    try {
      const rfqRef = doc(db, "rfqs", id);
      const rfqDoc = await getDoc(rfqRef);
      if (rfqDoc.exists()) {
        const rfqdata = rfqDoc.data();
        return rfqdata;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
      return null;
    }
  };
 
  const SingleRfq = async () => {
    const data = await getRfq(router.query.slug);
    setRfqData({ ...data });
    setIsLoading(false);
    // console.log("hgsahgsxhgs", userDetails);

  };

  useEffect(() => {
    SingleRfq();
    QuoteFind();
  }, [router]);
  return (
    <div className="flex md:h-[640px] overflow-y-hidden  ">
      <div className=" hidden md:block w-1/6">
        {/* <Sidebar /> */}
        <SimpleSideBar />
      </div>

      <Drawer
        placement={"left"}
        width={300}
        height={825}
        className=" md:hidden block  "
        open={showFilter}
        onClose={onClose}
      >
        <SimpleSideBar />
      </Drawer>
      <div className="bg-gray-100 flex-1 px-4 md:h-[640px] pb-8 overflow-y-scroll ">
        <Link href={"/myRfq/inquiryList"}>
          <div
            className="py-4 px-4"
            
          >
            <HiArrowNarrowLeft size={22} className="text-gray-500 " />
          </div>
        </Link>
        <div className="flex  flex-col-reverse md:flex-row space-y-reverse space-y-6  md:space-x-3  ">
          <Admin
            id={router.query.slug}
            updatedRfqData={updatedRfqData}
            user={user}
          />
          <RequestDetails isLoading={isLoading} rfqData={rfqData} />
        </div>
      </div>
    </div>
  );
};

export default Post;
