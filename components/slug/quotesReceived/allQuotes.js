import { db } from "@/config/firebase";
import { Modal, Progress } from "antd";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { TbCircleDashed, TbCircleDotted } from "react-icons/tb";
import RequestDetails from "../requestDetails";
import { useRouter } from "next/router";
import { SideBar } from "@/useStore/sideBar";

const AllQuotes = ({ isLoading, rfqData, quoteData, changeSingleQuote }) => {
  // console.log("quoteData",quoteData);
  // console.log("ialoading", isLoading);
  const [openModel, setOpenModel] = useState(false)
  const updateOpenModel = (value) => {
    setOpenModel(value)
  };
  const [selected, setSelected] = useState(0);
  const [updateNewRfq] = SideBar((store) => [store.updateNewRfq]);
  const router = useRouter();
  const [updatedQuoteData, setUpdatedQuoteData] = useState(quoteData);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [openConfirmModel, setOpenConfirmModel] = useState(false);
  const deleteRfq = async (id) => {
    const rfqdoc = doc(db, "rfqs", id);
    await deleteDoc(rfqdoc);
    updateNewRfq();
    console.log("deleted sucessfully");
    router.push("/myRfq/rfqList");
  };

  const filterQuoteData = (id) => {
    if (id == 0) {
      const data = quoteData;
      data.sort((a, b) => b.quotationScore - a.quotationScore);
      // console.log("data", data)

      setUpdatedQuoteData(data);
    } else {
      setUpdatedQuoteData(quoteData);

      // console.log("update", quoteData);
    }
  };

  return (
    <div className="md:w-3/5 w-full md:px-6 relative bg-white rounded-xl h-[800px] overflow-y-auto py-4">
      <Modal
        title="My Request Details"
        centered
        open={openModel}
        footer={null}
        onCancel={() => updateOpenModel(false)}
        width={600}
      >
        <RequestDetails rfqData={rfqData} />
      </Modal>
      {isLoading ? (
        <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <TbCircleDotted size={40} className="text-blue-600 animate-spin" />
        </div>
      ) : (
        <>
          <div>
            <p className="font-bold md:px-0 px-6 text-base md:text-xl  text-gray-800 mb-4">
              Quotes Received ({quoteData?.length} of Maximun 10)
            </p>
            <div className="flex space-x-6 items-center">
              <div
                className="px-2 md:mx-0 mx-6 w-fit  py-1 hover:border-rose-600 border text-gray-600 hover:text-rose-600 rounded cursor-pointer"
                onClick={() => {
                  updateOpenModel(true);
                }}
              >
                view my RFQ
              </div>
              <div className="relative">
                <div
                  className="px-2 md:mx-0 mx-6 w-fit  py-1 hover:border-rose-600 border text-gray-600 hover:text-rose-600 rounded cursor-pointer"
                  onClick={() => {
                    setOpenConfirmModel(true);
                  }}
                >
                  close the request
                </div>
              </div>
              {openConfirmModel && (
                <div className="absolute px-4 py-4 border rounded-md shadow  bg-white">
                  <p className="font-medium text-gray-500 pb-5">
                    Do you want to confirm ?
                  </p>
                  <div className="flex justify-end space-x-5">
                    <p
                      className="font-semibold text-rose-500 cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        deleteRfq(router.query.slug);
                      }}
                    >
                      Yes
                    </p>
                    <p
                      className="font-semibold text-blue-500 cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        setOpenConfirmModel(false);
                      }}
                    >
                      No
                    </p>
                  </div>
                </div>
              )}
              <div
                className="px-2 md:mx-0 mx-6 w-fit  py-1 hover:border-rose-600 border text-gray-600 hover:text-rose-600 rounded cursor-pointer"
                onClick={() => {
                  filterQuoteData(0);
                }}
              >
                sort by Quotation score
              </div>
            </div>
          </div>
          <div className="flex flex-col my-6 divide-y">
            {quoteData?.length == 0 && <p className="text-center font-semibold text-lg text-gray-500">no quotes</p>}
            {quoteData?.map((item, index) => {
              return (
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    changeSingleQuote(item);
                  }}
                >
                  <div
                    className={`md:grid-cols-7 grid-cols-4 py-5  place-items-center hover:bg-gray-50 ${
                      selected == item.id || selected == index
                        ? "bg-blue-50"
                        : "bg-white"
                    }   grid  `}
                    onClick={() => {
                      setSelected(item.id);
                    }}
                  >
                    <div className="flex flex-col items-center col-span-1  space-y-3 ">
                      <picture>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIn-gE6j6sjvg0ekFgFBIzVP5VdN3aBu9dLg&usqp=CAU"
                          alt=""
                          className="md:w-16 md:h-16 w-12 h-12 rounded-full"
                        />
                      </picture>
                      <p className="font-semibold text-sm md:text-base text-gray-700">
                        Seller {index + 1}
                      </p>
                    </div>

                    <div className="md:col-span-2 col-span-1 flex flex-col items-center divide-y text-gray-400 font-semibold">
                      <p className="font-semibold text-gray-700  pb-4 text-sm md:text-xl">
                        Expire Date
                      </p>
                      <p className="font-semibold text-sm md:text-base text-gray-600 pt-4">
                        {item.quoteDate?.quoteExpireDate}
                      </p>
                    </div>
                    <div className="col-span-1  md:col-span-2 flex flex-col items-center  divide-y text-gray-400 font-semibold">
                      <p className="font-semibold  text-gray-700 pb-4 text-sm md:text-xl">
                        Posted Date
                      </p>
                      <p className="font-semibold text-sm md:text-base text-gray-600 pt-4">
                        {item.quoteDate?.quotePostedDate}
                      </p>
                    </div>
                    <div className=" col-span-1 md:col-span-2 flex flex-col space-y-6 items-center text-gray-400 font-semibold">
                      <p className="font-bold text-gray-800 text-xs md:text-lg">
                        Quotation Score
                      </p>
                      <p
                        className={`font-semibold text-sm md:text-base text-white px-4 py-1 rounded-3xl  ${
                          item.quotationScore > 50
                            ? "bg-green-500"
                            : "bg-rose-500"
                        } `}
                      >
                        {item.quotationScore}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default AllQuotes;
