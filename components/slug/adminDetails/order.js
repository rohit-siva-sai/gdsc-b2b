// import { useStore } from "@/useStore/details";
import { Data } from "@/useStore/data";
import { Seller } from "@/useStore/seller";
import { SideBar } from "@/useStore/sideBar";
import { Select } from "antd";
import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { useMemo } from "react";
import { useEffect } from "react";

const Order = () => {
  const [
    updateOrder,
    updateIncreaseProgress,
    updateDecreaseProgress,
    order,
    scoreProduct,
    progress
  ] = Seller((store) => [
    store.updateOrder,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,

    store.order,
    store.scoreInquiry,
    store.progress
  ]);
  const [newQuote] = SideBar((store) => [store.newQuote]);
  const [i, setI] = useState(1);
  const [singleQuote] = Data((store) => [store.singleQuote]);
 

  const [orderQty, setOrderQty] = useState(order)
 


  return (
    <div className="flex flex-col space-y-2">
      <label className="leading-7 text-base font-semibold text-gray-800">
        Estimated Order Quantity<span className="text-red-600 text-lg">*</span>
      </label>
      <div className="flex md:flex-nowrap space-y-2 md:space-y-0 flex-wrap md:space-x-3">
      <Select
          showSearch
          className="w-44"
          // style={{
          //   width: 200,
          // }}
          defaultValue={"< 500"}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          onChange={(value) => {
            setOrderQty((prev) => ({ ...prev, estimatedQuantity: value }));
          }}
          onBlur={() => {
            updateOrder(orderQty);
          }}
          options={[
            {
              value: "< 500",
              label: "< 500",
            },
            {
              value: "> 500",
              label: "> 500",
            },
           
          ]}
        />
        <input
          type="number"
          value={orderQty.orderQuantity}
          id="aboutProduct"
          onChange={(e) => {
            setOrderQty((prev) => ({ ...prev, orderQuantity: e.target.value }));
          }}
          onBlur={() => {
            // console.log('rohit');
            
            updateOrder(orderQty);
            orderQty.orderQuantity != 0
              ? (scoreProduct[5].score = true)
              : (scoreProduct[5].score = false);
            if (scoreProduct[5].score && i == 1) {
              updateIncreaseProgress(20);
              setI(2);
            }
            if (!scoreProduct[5].score && i==2) {
              updateDecreaseProgress(20);
              setI(1);
            }
          }}
          name="productName"
          placeholder="eg: 1000"
          className="w-44 bg-white placeholder:leading-6  rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-[1px] px-2 leading-8 transition-colors duration-200 ease-in-out"
        />
        <Select
          showSearch
          className="w-44"
          // style={{
          //   width: 200,
          // }}
          defaultValue={"Bags"}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          onChange={(value) => {
            setOrderQty((prev) => ({ ...prev, orderType: value }));
          }}
          onBlur={() => {
            updateOrder(orderQty);
          }}
          options={[
            {
              value: "Bags",
              label: "Bags",
            },
            {
              value: "Barrels",
              label: "Barrels",
            },
            {
              value: "Boxes",
              label: "Boxes",
            },
            {
              value: "Cartons",
              label: "Cartons",
            },
            {
              value: "Centimeters",
              label: "Centimeters",
            },
            {
              value: "Containers",
              label: "Containers",
            },
            {
              value: "Dozens",
              label: "Dozens",
            },
            {
              value: "Gallons",
              label: "Gallons",
            },
            {
              value: "Pounds",
              label: "Pounds",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Order;
