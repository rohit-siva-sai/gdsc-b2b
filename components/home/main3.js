import Link from "next/link";
import React from "react";

const Main3 = () => {
  return (
    <div className="my-12 px-24">
      <div>
        <p className="font-semibold text-4xl text-gray-700 text-center underline decoration-2 underline-offset-4 decoration-cyan-600 ">
          Start trading in 3 simple steps
        </p>
        <div className="mt-6">
          <div className="grid grid-cols-5">
            <picture>
              <img
                src="https://ud-img.azureedge.net/w_720,q_90/u/assets/ppuy1q441skzq5rkviqh.png"
                alt=""
                className="w-56"
              />
            </picture>
            <div className="h-1 self-center w-full bg-gray-600"></div>
            <picture>
              <img
                src="https://ud-img.azureedge.net/w_720,q_90/u/assets/complete_kyc_pic.png"
                alt=""
                className="w-56"
              />
            </picture>
            <div className="h-1 self-center w-full bg-gray-600"></div>

            <picture>
              <img
                src="https://ud-img.azureedge.net/w_720,q_90/u/assets/start_buying_pic.png"
                alt=""
                className="w-56"
              />
            </picture>
          </div>
          <div className="grid grid-cols-5 mt-4">
            <div className="flex flex-col space-y-8 text-center">
                <p className="text-gray-800 font-semibold text-xl ">Create an account</p>
                <p className="font-semibold text-gray-500">Register using your mobile number. Enter your Name, Shop name and Pincode.</p>
            </div>
            <div></div>
            <div className="flex flex-col space-y-8 text-center">
                <p className="text-gray-800 font-semibold text-xl ">Complete Company Profile</p>
                <p className="font-semibold text-gray-500">Give edetails like GSTIN, Shop & Establishment Licence</p>
            </div>
          
            <div></div>
            <div className="flex flex-col space-y-8 text-center">
                <p className="text-gray-800 font-semibold text-xl ">Start Trading</p>
                <p className="font-semibold text-gray-500">Go to the new trade pag and enter the details of the products and submit and you will get the best quote from best seller</p>
            </div>
          </div>
          <Link href={"/rfq"}>
            <div className="px-4 py-1 w-fit mx-auto mt-4 bg-cyan-600 text-white font-semibold text-lg rounded-md cursor-pointer ">
              Start Trading
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main3;
