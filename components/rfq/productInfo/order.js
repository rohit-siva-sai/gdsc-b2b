import { useStore } from "@/useStore/details";
import { Select } from "antd";
import React, { useState } from "react";

const Order = () => {
  const [
    updateOrder,
    updateIncreaseProgress,
    updateDecreaseProgress,
    order,
    scoreProduct,
  ] = useStore((store) => [
    store.updateOrder,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,

    store.order,
    store.scoreProduct,
  ]);
  const [i, setI] = useState(1);

  const [orderQty, setOrderQty] = useState(order);

  return (
    <div className="flex flex-col space-y-1">
      <label className="leading-7 text-base font-semibold text-gray-800">
        Estimated Order Quantity<span className="text-red-600 text-lg">*</span>
      </label>
      <div className="flex space-x-3">
        <input
          type="number"
          value={orderQty.orderQuantity}
          id="aboutProduct"
          onChange={(e) => {
            setOrderQty((prev) => ({ ...prev, orderQuantity: e.target.value }));
          }}
          onBlur={() => {
            updateOrder(orderQty);
            orderQty.orderQuantity != 0
              ? (scoreProduct[5].score = true)
              : (scoreProduct[5].score = false);
            if (scoreProduct[5].score && i == 1) {
              updateIncreaseProgress(4);
              setI(2);
            }
            if (!scoreProduct[5].score) {
              updateDecreaseProgress(4);
              setI(1);
            }
          }}
          name="productName"
          placeholder="eg: 1000"
          className="w-40 bg-white placeholder:leading-6  rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-800 py-[1px] px-2 leading-8 transition-colors duration-200 ease-in-out"
        />
        <Select
          showSearch
          className="w-40"
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
