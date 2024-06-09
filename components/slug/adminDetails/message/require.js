import React from "react";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Destination from "./destination";
import { Data } from "@/useStore/data";

const Require = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="pt-2">
      <div
        className={`w-full md:w-10/12 bg-gray-100 border border-gray-300 rounded px-4 transition-all duration-500 ${
          show ? "  md:h-[520px] h-[550px] " : "md:h-[65px] h-[60px] overflow-hidden"
        } `}
      >
        <div
          className="flex items-center justify-between py-2 cursor-pointer"
          onClick={() => {
            setShow(!show);
          }}
        >
          <div>
            <p className="font-semibold text-gray-700">
              More Customized Requirements
            </p>
            <p className="font-normal md:text-base text-xs text-gray-400">
              Include destination port, shipment terms, etc.
            </p>
          </div>
          <AiOutlineDown
            className={`text-gray-700 ${
              show ? "rotate-180" : "rotate-0"
            }  transition-transform duration-300 `}
          />
        </div>
        {show && (
          <div
            className={` mt-4 flex flex-col space-y-6 transition-all duration-500  w-10/12`}
          >
            <Destination />
          </div>
        )}
      </div>
    </div>
  );
};

export default Require;
