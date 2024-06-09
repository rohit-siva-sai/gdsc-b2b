import React from "react";
import { TbCircleDotted } from "react-icons/tb";

const RequestDetails = ({ rfqData, isLoading }) => {
  return (
    <div className="md:w-1/3 relative w-full flex-1 px-6 bg-white py-4  rounded-xl h-[800px]">
      {rfqData == null && isLoading ? (
        <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <TbCircleDotted size={40} className="text-blue-600 animate-spin" />
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold text-xl text-gray-800">
              My Request Details
            </p>
            <p className="font-semibold text-base text-blue-600">
              Close the Request
            </p>
          </div>
          <div className="flex  space-x-16  items-center py-4">
            <p className="font-semibold text-xl w-1/3 text-gray-800">
              RFQ Score
            </p>
            <p
              className={`${
                rfqData?.rfqScore < 60 ? "text-rose-600" : "text-green-600"
              } font-bold text-2xl`}
            >
              {rfqData?.rfqScore}
            </p>
          </div>
          <p className="font-semibold text-xl text-gray-800 ">
            Request Details
          </p>
          <div className="flex flex-col space-y-3 py-4">
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base  w-1/3 text-gray-500">
                Product Name
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.productName}
              </p>
            </div>
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base w-1/3 text-gray-500">
                Category
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.productCategory && rfqData?.productCategory[2]}
              </p>
            </div>
            <div className="flex  space-x-16  items-start">
              <p className="font-normal text-base w-1/3  text-gray-500">
                About Your Product
              </p>
              <p className="text-gray-500 font-normal flex-1 line-clamp-2 text-base">
                {rfqData?.aboutProduct}
              </p>
            </div>
            <div className="flex  space-x-16  items-start">
              <p className="font-normal text-base w-1/3 text-gray-500">Image</p>
              <div className="w-16 rounded h-16 bg-gray-100 flex items-center justify-center ">
                <p className="font-semibold text-center text-gray-400  text-xs">
                  no image provided
                </p>
              </div>
            </div>
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base w-1/3 text-gray-500">
                Sourcing Type
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.sourcingType}
              </p>
            </div>
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base w-1/3 text-gray-500">
                Quantity
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.order?.orderQuantity}&nbsp; {rfqData?.order?.orderType}
              </p>
            </div>
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base w-1/3 text-gray-500">
                Unit Price
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.unitPrice?.unitType} &nbsp;{rfqData?.unitPrice?.units}
              </p>
            </div>
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base w-1/3 text-gray-500">
                Shipment Terms
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.requirements?.shipmentTerms}
              </p>
            </div>
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base w-1/3 text-gray-500">
                Destination Port
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.requirements?.destinationPort}
              </p>
            </div>
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base w-1/3 text-gray-500">
                Payment Method
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.requirements?.paymentMethod}
              </p>
            </div>
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base w-1/3 text-gray-500">
                Certification(s)
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.requirements?.company}
              </p>
            </div>
          </div>
          <p className="font-semibold text-xl text-gray-800 pt-4 ">RFQ Date</p>
          <div className="flex flex-col space-y-3 py-4">
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base w-1/3 text-gray-500">
                Post Date
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.rfqDate?.rfqPostedDate}
              </p>
            </div>
            <div className="flex  space-x-16  items-center">
              <p className="font-normal text-base w-1/3 text-gray-500">
                Expires
              </p>
              <p className="text-gray-500 font-normal text-base">
                {rfqData?.rfqDate?.rfqExpireDate}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestDetails;
