import { db } from "@/config/firebase";
import { Common } from "@/useStore/common";
import { Data } from "@/useStore/data";
import { Seller } from "@/useStore/seller";
import { SideBar } from "@/useStore/sideBar";
import { User } from "@/useStore/user";
import { Progress } from "antd";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TbCircleDotted, TbCoinRupee } from "react-icons/tb";

const AllInquiry = ({
  
  updatedRfqData,
  isLoading,
  filterRfqData,
}) => {
  const [userDetails] = User((store) => [store.userDetails]);
  const [quoteData, singleQuote] = Data((store) => [
    store.quoteData,
    store.singleQuote,
    ]);
    const [user] = Common((store) => [store.user]);
    const [updateNewRfq, newQuote] = SideBar((store) => [
    store.updateNewRfq,
    store.newQuote,
  ]);


  const [selected, setSelected] = useState("All");
  const [
    updateOrder,
    updateUnitPrice,
    updateRequirements,
    updateQuoteDate,
    updateProgress,
    sellerCategory
  ] = Seller((store) => [
    store.updateInitialOrder,
    store.updateInitailUnitPrice,
    store.updateInitialRequirements,
    store.updateQuoteDate,
    store.updateProgress,
    store.sellerCategory
  ]);

  // const [quoteData, setquoteData] = useState();
  // const quoteCollection = collection(db, "quotations");

  // const getQuotes = async (id) => {
  //   try {
  //     const data = await getDocs(quoteCollection);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     // const user = JSON.parse(localStorage.getItem("userDetails"));
  //     // const rfq = filteredData.filter(
  //     //   (item) => item.productCategory[1] === "industrial materials"
  //     // );
  //     //   .sort((a, b) => b.timestamp["seconds"] - a.timestamp["seconds"]);
  //     setquoteData(filteredData);
  //     // console.log("filter", rfq);
  //   } catch (err) {
  //     console.log(err.message);
  //     // setIsLoading(false);
  //   }
  // };

  // const updateUser = async (id, star) => {
  //   const userDoc = doc(db, "quotations", id);
  //   await updateDoc(userDoc, {
  //     user: user.uid,
  //   });
  //   console.log("updated successfully")
  //   toast.success("success", {
  //     duration: 1000,
  //     position: "top-center",
  //     style: {
  //       background: "black",
  //       color: "white",
  //     },
  //   });

  //   // await getUser(id);
  //   // updateOpenUserModel(false);
  // };

  // const mapping = ()=>{
  //   quoteData.map((item)=>{
  //     updateUser(item.id)
  //   })
  // }

  const quotationCheck = (rfqid) => {
    let check = false;
    const data = quoteData?.filter(
      (item) => item.rfqId == rfqid && user.uid == item.user
    );
    if (data?.length > 0) check = true;
    else check = false;

    return check;
  };

  const updateStarred = async (id, star) => {
    const userDoc = doc(db, "rfqs", id);
    await updateDoc(userDoc, {
      starred: !star,
    });
    console.log("updated successfully");
    updateNewRfq();
    toast.success("success", {
      duration: 1000,
      position: "top-center",
      style: {
        background: "black",
        color: "white",
      },
    });

    // await getUser(id);
    // updateOpenUserModel(false);
  };
  const router = useRouter();
  // useEffect(() => {
  //   getQuotes();
  // }, [newQuote]);
  useEffect(() => {
    if (singleQuote) {
      updateOrder();
      updateUnitPrice();
      updateRequirements();
      updateProgress(20);
    }
  }, [router]);

  return (
    <div className="bg-gray-100  flex-1 px-2 md:px-6 md:h-[640px] pb-8  overflow-y-scroll  ">
      <Toaster />
      {isLoading ? (
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <TbCircleDotted size={40} className="text-blue-600 animate-spin" />
        </div>
      ) : (
        <>
          <p className="font-light text-sm py-4">
            RFQs / <span className="font-normal">All</span>
          </p>
          <div className="bg-white w-full    py-6   rounded-xl">
            <div className="border-b flex flex-col space-y-3 pb-4">
              <div className="flex items-center justify-between px-4 md:px-8">
                <p className="font-semibold text-2xl  text-gray-800">
                  My Inquiries
                </p>
                <p></p>
              </div>
              <div className="flex justify-between space-x-8 ml-4 px-8">
                <div className="flex space-x-8 ml-4">
                  <div
                    className={`font-semibold ${
                      selected == "All" ? "text-blue-600" : "text-gray-600"
                    }  text-[17px] hover:text-rose-600 cursor-pointer`}
                    onClick={() => {
                      filterRfqData(1);
                      setSelected("All");
                    }}
                  >
                    All
                  </div>
                  <div
                    className={`font-semibold ${
                      selected == "Starred" ? "text-blue-600" : "text-gray-600"
                    }  text-[17px] hover:text-rose-600 cursor-pointer`}
                    onClick={() => {
                      filterRfqData(0);
                      setSelected("Starred");
                      // mapping()
                    }}
                  >
                    Starred
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base text-gray-700">
                    Category:{" "}
                    <span className="text-xs md:text-base">{sellerCategory}</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:grid-cols-12 pt-4 grid-cols-5 grid place-items-start  px-2 md:px-8 pb-4 ">
              <div className="md:col-span-1 md:block hidden">
                <input type="checkbox" name="" id="" />
              </div>
              <div className="font-semibold text-sm md:text-base text-gray-600 col-span-2 md:col-span-5 ">
                Quotation
              </div>
              <div className="font-semibold text-sm md:text-base text-gray-600 col-span-1 md:col-span-2 ">
                Expires
              </div>
              <div className="font-semibold text-sm md:text-base text-gray-600 col-span-1 md:col-span-2 ">
                PostDate
              </div>
              <div className="font-semibold text-sm md:text-base text-gray-600 col-span-1 md:col-span-2 ">
                State
              </div>
            </div>
           {updatedRfqData.length > 0 ? <div className="flex flex-col space-y-0">
              {updatedRfqData?.map((item) => {
                return (
                  <Link passHref={true} href={`/myRfq/inquiryList/${item.id}`}>
                    <div className="md:grid-cols-12 grid-cols-5 py-3 border px-2 md:px-8 hover:bg-gray-50  grid place-items-start ">
                      <div className="md:col-span-1 md:flex hidden  space-x-4 items-center">
                        <div
                          className=" z-30"
                          onClick={(e) => {
                            e.preventDefault();
                            updateStarred(item.id, item.starred);
                          }}
                        >
                          {item.starred == true ? (
                            <AiFillStar className="text-yellow-400" size={20} />
                          ) : (
                            <AiOutlineStar
                              className="text-gray-500 "
                              size={20}
                            />
                          )}
                        </div>
                      </div>
                      <div className=" flex items-center col-span-2 md:col-span-5 space-x-4 flex-1 ">
                       
                        <div className="flex  flex-col space-y-4 items-stretch ">
                          <p className="font-semibold text-sm md:text-base text-gray-400 ">
                            {item.productName}
                          </p>
                          <p className="font-semibold text-sm md:text-base text-gray-400 ">
                            {item.productCategory[2]}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-1 text-xs md:text-base md:col-span-2 text-gray-400 font-semibold">
                        {item.rfqDate?.rfqExpireDate}
                      </div>
                      <div className="col-span-1 text-xs md:text-base md:col-span-2 text-gray-400 font-semibold">
                        {item.rfqDate?.rfqPostedDate}
                      </div>
                      <div className="col-span-1 text-xs md:text-base md:col-span-2 text-gray-400 font-semibold">
                        <div className="flex flex-col text-sm md:text-base space-y-1">
                          {quotationCheck(item.id) ? (
                            <p className="text-blue-500">submitted</p>
                          ) : (
                            <p className="text-rose-500">not submmited</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div> :  <p className="font-semibold text-xl  absolute top-[60%] left-[50%] text-gray-500  ">No Rfq Data</p> }
          </div>
        </>
      )}
    </div>
  );
};

export default AllInquiry;
