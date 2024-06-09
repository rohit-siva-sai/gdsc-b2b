import { Data } from "@/useStore/data";
import { useStore } from "@/useStore/details";
import { Seller } from "@/useStore/seller";
import { Select } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Destination = () => {
  const [
    updateRequirements,
    updateIncreaseProgress,
    updateDecreaseProgress,
    requirements,
    scoreRequire,
  ] = Seller((store) => [
    store.updateRequirements,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.requirements,
    store.scoreInquiry,
  ]);
  const [i1, setI1] = useState(1);
  const [i2, setI2] = useState(1);
  const [i3, setI3] = useState(1);
  const [i4, setI4] = useState(1);

  const [singleQuote] = Data((store) => [store.singleQuote]);
  const router = useRouter()


  

  const [require, setRequire] = useState(requirements);



  return (
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col space-y-1">
          <label className="leading-7 text-base font-semibold text-gray-800">
            Destination Lead Time
          </label>
          <input
            type="text"
            value={require.destinationPort}
            id="aboutProduct"
            onChange={(e) => {
              setRequire((prev) => ({
                ...prev,
                destinationPort: e.target.value,
              }));
            }}
            onBlur={() => {
              updateRequirements(require);
              require.destinationPort.length !=0
                ? (scoreRequire[0].score = true)
                : (scoreRequire[0].score = false);
              if (scoreRequire[0].score && i1 == 1) {
                updateIncreaseProgress(10);
                setI1(2);
                // console.log('as',i1);
                
              }
              if (!scoreRequire[0].score && i1==2) {
                updateDecreaseProgress(10);
                // console.log('asas',i1);
                
                setI1(1);
              }
            }}
            name="productName"
            placeholder="Enter"
            className="bg-white placeholder:leading-6  rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-[1px] px-2 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="leading-7 text-base font-semibold text-gray-800">
            Shipment Terms
          </label>
          <Select
            defaultValue={require.shipmentTerms}
            placeholder="Select One"
            className="w-full font-semibold"
            onChange={(value) => {
              setRequire((prev) => ({ ...prev, shipmentTerms: value }));
            }}
            onBlur={() => {
              updateRequirements(require);
              require.shipmentTerms?.length != 0
                ? (scoreRequire[1].score = true)
                : (scoreRequire[1].score = false);
              if (scoreRequire[1].score && i2 == 1) {
                updateIncreaseProgress(10);
                setI2(2);
              }
              if (!scoreRequire[1].score && i2==2) {
                updateDecreaseProgress(10);
                setI2(1);
              }
            }}
            options={[
              {
                value: "CFR",
                label: "CFR",
              },
              {
                value: "CIF",
                label: "CIF",
              },
              {
                value: "CIP",
                label: "CIP",
              },
              {
                value: "CPT",
                label: "CPT",
              },
              {
                value: "DAF",
                label: "DAF",
              },
              {
                value: "DDP",
                label: "DDP",
              },
              {
                value: "DDU",
                label: "DDU",
              },
              {
                value: "DEQ",
                label: "DEQ",
              },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <label className="leading-7 text-base font-semibold text-gray-800">
          Payment Method
        </label>
        <Select
          defaultValue={require.paymentMethod}
          placeholder="Select One"
          className="w-full font-semibold"
          onChange={(value) => {
            setRequire((prev) => ({ ...prev, paymentMethod: value }));
          }}
          onBlur={() => {
            updateRequirements(require);
            require.shipmentTerms?.length != 0
              ? (scoreRequire[2].score = true)
              : (scoreRequire[2].score = false);
            if (scoreRequire[2].score && i3 == 1) {
              updateIncreaseProgress(10);
              setI3(2);
            }
            if (!scoreRequire[2].score && i3==2) {
              updateDecreaseProgress(10);
              setI3(1);
            }
          }}
          options={[
            {
              value: "Cash in Advance (CIA)",
              label: "Cash in Advance (CIA)",
            },
            {
              value: "Cash on Delivery (COD)",
              label: "Cash on Delivery (COD)",
            },
            {
              value: "Check",
              label: "Check",
            },
            {
              value: "Days after Acceptance (DA)",
              label: "Days after Acceptance (DA)",
            },
            {
              value: "Delivery Point",
              label: "Delivery Point",
            },
            {
              value: "PayPal",
              label: "PayPal",
            },
            {
              value: "Letter of Credit (LC)",
              label: "Letter of Credit (LC)",
            },
            {
              value: "DEQ",
              label: "DEQ",
            },
          ]}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label className="leading-7 text-base font-semibold text-gray-800">
          Message
        </label>
        <textarea
          type="text"
          value={require.message}
          id="aboutProduct"
          rows={5}
          onChange={(e) => {
            setRequire((prev) => ({
              ...prev,
              message: e.target.value,
            }));
          }}
          onBlur={() => {
            updateRequirements(require);
            require.company?.length != 0
              ? (scoreRequire[3].score = true)
              : (scoreRequire[3].score = false);
            if (scoreRequire[3].score && i4 == 1) {
              updateIncreaseProgress(10);
              setI4(2);
            }
            if (!scoreRequire[3].score && i4==2) {
              updateDecreaseProgress(10);
              setI4(1);
            }

            // score[0] && i==1 ? updateIncreaseProgress(5)  : updateDecreaseProgress(5);
          }}
          name="productName"
          placeholder="Please indicate your deatils requirements to ensure fast and efficient responses from suppliers . You may include Material Size/Dimension, Grade/Quality Standard, Packaging requirements and/or others"
          className="bg-white placeholder:leading-6  rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Destination;
