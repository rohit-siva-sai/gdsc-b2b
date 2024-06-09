import { Company } from "@/useStore/company";
import { Select } from "antd";
import React from "react";
import { useState } from "react";

const MarketSell = () => {
  const [marketSell, updateMarketSell] = Company((store) => [
    store.marketSell,
    store.updateMarketSell,
  ]);
  const [sell, setSell] = useState(marketSell);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-sm font-semibold text-gray-800">
        Markets you sell to<span className="text-red-600 text-lg">*</span>
      </label>
      <Select
        // defaultValue="Bussiness Service"
        mode="multiple"
        allowClear
        maxTagCount="responsive"
        value={sell}
        placeholder="Select One"
        className="w-full md:w-full text-sm font-semibold"
        onChange={(value) => {
          setSell(value);
        }}
        onBlur={() => {
          updateMarketSell(sell);
        }}
        options={[
          {
            value: "Asia",
            label: "Asia",
          },
          {
            value: "Australasia",
            label: "Australasia",
          },
          {
            value: "Central/South America",
            label: "Central/South America",
          },
          {
            value: "Eastern Europe",
            label: "Eastern Europe",
          },
          {
            value: "Western Europe",
            label: "Western Europe",
          },
          {
            value: "Not Applicable",
            label: "Not Applicable",
          },
        ]}
      />
    </div>
  );
};

export default MarketSell;
