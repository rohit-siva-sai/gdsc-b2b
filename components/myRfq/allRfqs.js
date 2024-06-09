import { Progress } from "antd";
import Link from "next/link";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const AllRfqs = ({ rfqData }) => {
  return (
    <div className="bg-gray-100 flex-1 px-2 md:px-6 md:h-[640px] pb-8  overflow-y-scroll  ">
      <p className="font-light text-sm py-4">
        RFQs / <span className="font-normal">All</span>
      </p>
      <div className="bg-white w-full   py-6   rounded-xl">
        <div className="border-b flex flex-col space-y-3 pb-4">
          <p className="font-semibold text-2xl px-8 text-gray-800">
            My Requests
          </p>
         
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
          {rfqData?.map((item) => {
            return (
              <Link  href={`/myRfq/rfqList/${item.id}`}>
                <div className="md:grid-cols-12 grid-cols-5 py-3 border px-2 md:px-8 hover:bg-gray-50  grid place-items-start ">
                  <div className="md:col-span-1 md:flex hidden  space-x-4 items-center">
                    
                    <AiOutlineStar className="text-gray-500 " size={20} />
                  </div>
                  <div className=" flex items-center col-span-2 md:col-span-5 space-x-4 flex-1 ">
                    <div className="w-16 md:flex hidden  rounded h-16 bg-gray-100  items-center justify-center ">
                      <p className="font-semibold text-center text-gray-400  text-xs">
                        no image provided
                      </p>
                    </div>
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
