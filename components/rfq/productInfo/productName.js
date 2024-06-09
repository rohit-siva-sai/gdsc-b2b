import { useStore } from "@/useStore/details";
import React from "react";
import { useState } from "react";

const ProductName = () => {
  const [
    updateProductName,

    updateIncreaseProgress,
    updateDecreaseProgress,
    productName,
    score,
    scoreProduct
  ] = useStore((store) => [
    store.updateProductName,

    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.productName,
    store.score,
    store.scoreProduct
  ]);
  const [proName, setProName] = useState(productName);
  const [i, setI] = useState(1);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-base font-semibold text-gray-800">
        Product Name<span className="text-red-600 text-lg">*</span>
      </label>
      <input
        type="text"
        value={proName}
        id="productName"
        onChange={(e) => {
          setProName(e.target.value);
        }}
        onBlur={() => {
          updateProductName(proName);
          proName.length > 1 ? (scoreProduct[0].score = true) : (scoreProduct[0].score = false);
          if (scoreProduct[0].score && i == 1) {
            updateIncreaseProgress(5);
            setI(2);
          }
          if (!scoreProduct[0].score) {
            updateDecreaseProgress(5);
            setI(1);
          }

          // score[0] && i==1 ? updateIncreaseProgress(5)  : updateDecreaseProgress(5);
        }}
        name="productName"
        placeholder="Enter a specific product name"
        className="md:w-3/5 w-full bg-white rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-800 py-[1px] px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};

export default ProductName;
