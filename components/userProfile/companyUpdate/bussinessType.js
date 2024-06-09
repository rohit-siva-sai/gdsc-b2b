import { Company } from "@/useStore/company";
import { Select } from "antd";
import React from "react";
import { useState } from "react";

const BussinessType = () => {
  const [bussinessType, updateBussinessType] = Company((store) => [
    store.bussinessType,
    store.updateBussinessType,
  ]);
  const [type, setType] = useState(bussinessType);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-sm font-semibold text-gray-800">
        Bussiness Type<span className="text-red-600 text-lg">*</span>
      </label>
      <Select
        // defaultValue="Bussiness Service"
        value={type}
        placeholder="Select One"
        className="w-full md:w-full text-sm font-semibold"
        onChange={(value) => {
          setType(value);
        }}
        onBlur={() => {
          updateBussinessType(type);
        }}
        options={[
          {
            value: "Agent",
            label: "Agent",
          },
          {
            value: "Buying Office",
            label: "Buying Office",
          },
          {
            value: "Consultant",
            label: "Consultant",
          },
          {
            value: "Distributor",
            label: "Distributor",
          },
          {
            value: "Exporter",
            label: "Exporter",
          },
        ]}
      />
      
    </div>
  );
};

export default BussinessType;
