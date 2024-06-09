import { Progress } from "antd";
import Link from "next/link";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const AllQuotes = ({ quoteData }) => {
  // console.log("quoteData",quoteData);

  return (
    <div className="md:w-3/5 w-full md:px-6   bg-white rounded-xl h-[800px] overflow-y-auto py-4">
      <div>
        <p className="font-bold md:px-0 px-6 text-base md:text-xl  text-gray-800 mb-4">
          Quotes Received ({quoteData?.length} of Maximun 10)
        </p>
        <div className="px-2 md:mx-0 mx-6 w-fit  py-1 hover:border-cyan-600 border text-gray-600 hover:text-cyan-600 rounded cursor-pointer">
          Compare Quotations
        </div>
      </div>
      <div className="flex flex-col my-6 divide-y">
        {quoteData?.length == 0  && <p>no quotes</p> }
        {quoteData?.map((item, index) => {
          return (
            <Link  href={``}>
              <div className="md:grid-cols-7 grid-cols-4 py-5  place-items-center hover:bg-gray-50  grid  ">
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
                  <p className="font-semibold text-sm md:text-base text-gray-600 pt-4">{item.quoteDate?.quoteExpireDate}</p>
                </div>
                <div className="col-span-1  md:col-span-2 flex flex-col items-center  divide-y text-gray-400 font-semibold">
                  <p className="font-semibold  text-gray-700 pb-4 text-sm md:text-xl">
                  Posted Date
                  </p>
                  <p className="font-semibold text-sm md:text-base text-gray-600 pt-4">{item.quoteDate?.quotePostedDate}</p>
                </div>
                <div className=" col-span-1 md:col-span-2 flex flex-col space-y-6 items-center text-gray-400 font-semibold">
                  <p className="font-bold text-gray-800 text-xs md:text-lg">
                    Quotation Score
                  </p>
                  <p
                    className={`font-semibold text-sm md:text-base text-white px-4 py-1 rounded-3xl  ${
                      item.quotationScore > 50 ? "bg-green-500" : "bg-cyan-500"
                    } `}
                  >
                    {item.quotationScore}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllQuotes;
