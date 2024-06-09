import React from 'react'

const QuotationDetails = ({singleQuote}) => {
  return (
    <div className="md:w-1/3 w-full flex-1 px-6 bg-white py-4  rounded-xl h-[800px]">
      {singleQuote!=null && <div>
        <div className="flex justify-between items-center pb-4 border-b">
          <p className="font-semibold text-xl text-gray-800">
            My Quotation Details
          </p>
          <p className="font-semibold text-base text-blue-600">
            Close the Request
          </p>
        </div>
        <div className="flex  space-x-16  items-center py-4">
          <p className="font-semibold text-xl w-1/3 text-gray-800">Quotation Score</p>
          <p className={`${singleQuote.quotationScore < 60 ?  "text-rose-600": "text-green-600" } font-bold text-2xl`}>{singleQuote.quotationScore}</p>
        </div>
        <p className="font-semibold text-xl text-gray-800 ">Quotation Details</p>
        <div className="flex flex-col space-y-3 py-4">
          
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">
              Quantity
            </p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote.order?.orderQuantity}&nbsp; {singleQuote.order?.orderType}
            </p>
          </div>
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">
              Unit Price
            </p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote.unitPrice?.unitType} &nbsp;{singleQuote.unitPrice?.units}
            </p>
          </div>
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">
              Shipment Terms
            </p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote.requirements?.shipmentTerms}
            </p>
          </div>
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">
              Destination Port
            </p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote.requirements?.destinationPort}
            </p>
          </div>
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">
              Payment Method
            </p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote.requirements?.paymentMethod}
            </p>
          </div>
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">
              Certification(s)
            </p>
            <p className="text-gray-500 font-normal flex-1 line-clamp-2  text-base">
              {singleQuote.requirements?.message}
            </p>
          </div>
        </div>
        <p className="font-semibold text-xl text-gray-800 pt-4 ">Quotation Date</p>
        <div className="flex flex-col space-y-3 py-4">
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">
              Post Date
            </p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote.quoteDate?.quotePostedDate}
            </p>
          </div>
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">Expires</p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote.quoteDate?.quoteExpireDate}
            </p>
          </div>
        </div>
        <p className="font-semibold text-xl text-gray-800 pt-4 ">Seller Details</p>
        <div className="flex flex-col space-y-3 py-4">
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">
              Name
            </p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote?.sellerDetails?.sellerName}
            </p>
          </div>
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">Company Name</p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote?.sellerDetails?.sellerCompany}
            </p>
          </div>
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">Email</p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote?.sellerDetails?.sellerEmail}
            </p>
          </div>
          <div className="flex  space-x-16  items-center">
            <p className="font-normal text-base w-1/3 text-gray-500">Phone Number</p>
            <p className="text-gray-500 font-normal text-base">
              {singleQuote?.sellerDetails?.sellerPhoneNumber}
            </p>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default QuotationDetails
