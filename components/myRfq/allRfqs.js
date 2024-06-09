import { db } from "@/config/firebase";
import { SideBar } from "@/useStore/sideBar";
import { Progress } from "antd";
import { doc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const AllRfqs = ({ rfqData,updatedRfqData,filterRfqData }) => {
  const [updateNewRfq] = SideBar((store) => [store.updateNewRfq]);
  const [selected,setSelected] = useState("All")

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




  return (
    <div className="bg-gray-100 flex-1 px-2 md:px-6 md:h-[640px] pb-8  overflow-y-scroll  ">
       <Toaster />
      <p className="font-light text-sm py-4">
        RFQs / <span className="font-normal">All</span>
      </p>
      <div className="bg-white w-full   py-6   rounded-xl">
        <div className="border-b flex flex-col space-y-3 pb-4">
          <p className="font-semibold text-2xl px-8 text-gray-800">
            My Requests
          </p>
          <div className="flex space-x-8 ml-4 px-8">
                <div
                  className={`font-semibold ${selected=="All"? "text-blue-600": "text-gray-600"}  text-[17px] hover:text-rose-600 cursor-pointer`}
                  onClick={() => {
                    filterRfqData(1);
                    setSelected("All")
                  }}
                >
                  All
                </div>
                <div
                  className={`font-semibold ${selected=="Starred"? "text-blue-600": "text-gray-600"}  text-[17px] hover:text-rose-600 cursor-pointer`}
                  onClick={() => {
                    filterRfqData(0);
                    setSelected("Starred")
                    // mapping()
                    
                  }}
                >
                  Starred
                </div>
              </div>
        </div>
        
        <div className="md:grid-cols-12 grid-cols-5 grid place-items-start py-2  px-2 md:px-8 pb-4 ">
          <div className="md:col-span-1 md:block hidden">
           
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
        <div className="flex flex-col space-y-0">
          {updatedRfqData?.map((item) => {
            return (
              <Link  href={`/myRfq/rfqList/${item.id}`}>
                <div className="md:grid-cols-12 grid-cols-5 py-3 border px-2 md:px-8 hover:bg-gray-50  grid place-items-start ">
                  <div className="md:col-span-1 md:flex hidden  space-x-4 items-center"  onClick={(e) => {
                            e.preventDefault();
                            updateStarred(item.id, item.starred);
                          }}>
                    
                    {item.starred == true ? (
                            <AiFillStar className="text-yellow-400" size={20} />
                          ) : (
                            <AiOutlineStar
                              className="text-gray-500 "
                              size={20}
                            />
                          )}
                  </div>
                  <div className=" flex items-center col-span-2 md:col-span-5 space-x-4 flex-1 ">
                    
                    <div className="flex  flex-col space-y-4 items-stretch ">
                      <p className="font-semibold text-sm md:text-base text-gray-400 ">
                        {item.productName}
                      </p>
                      <p className="font-semibold text-sm md:text-base text-gray-400">
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
                  <div className="col-span-1 text-sm md:text-base md:col-span-2 text-gray-400 font-semibold">
                    <div className="flex flex-col text-xs md:text-base space-y-1">
                      <p>Quotes Recieved</p>
                      <div className="flex space-x-2 items-center">
                        <div className="flex-1 opacity-50">
                          <Progress
                            percent={item.quotesReceived?(item.quotesReceived/10)*100 : 0}
                            className="flex-1"
                            showInfo={false}
                            size={"small"}
                          />
                        </div>
                        <p className="text-xs">{item.quotesReceived}/10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllRfqs;
