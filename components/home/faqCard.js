import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const FaqCard = ({ main, text }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`${show ? "border border-gray-300 rounded" : "border-0"}`}>
      <div
        className={`flex justify-between items-center py-3 group cursor-pointer px-6   ${
          show ? "bg-[#232f3e] rounded-t" : "hover:bg-cyan-600/90 bg-gray-100 rounded"
        } `}
        onClick={() => {
          setShow(!show);
        }}
      >
        <p
          className={`text-lg font-semibold ${
            show ? "text-white" : "group-hover:text-white"
          } `}
        >
          {main}
        </p>
        {!show ? (
          <HiPlus className="font-semibold text-xl group-hover:text-white text-gray-600" />
        ) : (
          <HiMinus className="text-white font-semibold text-xl" />
        )}
      </div>
      {show && (
        <div className={`py-8 px-8 bg-gray-100 rounded-b font-semibold`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default FaqCard;
