import { Data } from "@/useStore/data";
import { useStore } from "@/useStore/details";
import { Seller } from "@/useStore/seller";
import { Select } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UnitPrice = () => {
  const [
    updateUnitPrice,

    updateIncreaseProgress,
    updateDecreaseProgress,
    unitPrice,
   scoreProduct
  ] = Seller((store) => [
    store.updateUnitPrice,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.unitPrice,
    store.scoreInquiry,
   
  ]);
  const [i, setI] = useState(1);
  const [singleQuote] = Data((store) => [store.singleQuote]);


  const [unitChange, setUnitChange] = useState(unitPrice);



  return (
    <div className="flex flex-col space-y-2">
      <label className="leading-7 text-base font-semibold text-gray-800">
        Preferred Unit Price
      </label>
      <div className="flex space-x-3">
        <Select
          showSearch
          className="w-44"
          // style={{
          //   width: 200,
          // }}
          defaultValue={"USD"}
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
            setUnitChange((prev) => ({ ...prev, unitType: value }));
          }}
          onBlur={() => {
            updateUnitPrice(unitChange);
          }}
          options={[
            {
              value: "CHF",
              label: "CHF",
            },
            {
              value: "EUR",
              label: "EUR",
            },
            {
              value: "GBP",
              label: "GBP",
            },
            {
              value: "HKD",
              label: "HKD",
            },
            {
              value: "JPY",
              label: "JPY",
            },
            {
              value: "NTD",
              label: "NTD",
            },
            {
              value: "NZT",
              label: "NZT",
            },
            {
              value: "RMB",
              label: "RMB",
            },
            {
              value: "SGD",
              label: "SGD",
            },
            {
              value: "USD",
              label: "USD",
            },
          ]}
        />
        <input
          type="number"
          value={unitChange.units}
          id="aboutProduct"
          onChange={(e) => {
            setUnitChange((prev) => ({ ...prev, units: e.target.value }));
          }}
          onBlur={() => {
            updateUnitPrice(unitChange);
            unitChange.units != 0 ? (scoreProduct[6].score = true) : (scoreProduct[6].score = false);
            if (scoreProduct[6].score && i == 1) {
              updateIncreaseProgress(20);
              setI(2);
            }
            if (!scoreProduct[6].score && i==2) {
              updateDecreaseProgress(20);
              setI(1);
            }

            // score[0] && i==1 ? updateIncreaseProgress(5)  : updateDecreaseProgress(5);
          }}
          name="units"
          placeholder="eg: 50"
          className="w-44 bg-white placeholder:leading-6  rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-[1px] px-2 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default UnitPrice;
