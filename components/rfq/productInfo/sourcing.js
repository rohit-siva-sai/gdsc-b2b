import { useStore } from "@/useStore/details";
import { Select } from "antd";
import React, { useState } from "react";

const Sourcing = () => {
  const [
    updateSourcingType,
    updateIncreaseProgress,
    updateDecreaseProgress,
    sourcingType,
    scoreProduct,
  ] = useStore((store) => [
    store.updateSourcingType,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.sourcingType,
    store.scoreProduct,
  ]);
  const [source, setSource] = useState(sourcingType);
  const [i, setI] = useState(1);

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };
  return (
    <div className="flex flex-col space-y-1">
      <label className="leading-7 text-base font-semibold text-gray-800">
        Sourcing Type
      </label>
      <Select
        // defaultValue="Bussiness Service"
        placeholder="Select One"
        className="w-3/5 md:w-2/6 font-semibold"
        onChange={(value) => {
          setSource(value);
        }}
        onBlur={() => {
          updateSourcingType(source);
          source?.length !=0
            ? (scoreProduct[4].score = true)
            : (scoreProduct[4].score = false);
          if (scoreProduct[4].score && i == 1) {
            updateIncreaseProgress(4);
            setI(2);
          }
          if (!scoreProduct[4].score) {
            updateDecreaseProgress(4);
            setI(1);
          }
        }}
        options={[
          {
            value: "Bussiness Service",
            label: "Bussiness Service",
          },
          {
            value: "Customized Product",
            label: "Customized Product",
          },
          {
            value: "Non-Customized Product",
            label: "Non-Customized Product",
          },
          {
            value: "Total Solution",
            label: "Total Solution",
          },
          {
            value: "Others",
            label: "Others",
          },
        ]}
      />
    </div>
  );
};

export default Sourcing;
