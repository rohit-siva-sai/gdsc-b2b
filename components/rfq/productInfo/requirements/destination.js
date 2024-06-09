import { useStore } from "@/useStore/details";
import { Select } from "antd";
import React from "react";
import { useState } from "react";

const Destination = () => {
  const [
    updateRequirements,
    updateIncreaseProgress,
    updateDecreaseProgress,
    requirements,
    scoreRequire,
  ] = useStore((store) => [
    store.updateRequirements,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.requirements,
    store.scoreRequire,
  ]);
  const [i1, setI1] = useState(1);
  const [i2, setI2] = useState(1);
  const [i3, setI3] = useState(1);
  const [i4, setI4] = useState(1);

  const [require, setRequire] = useState(requirements);


  return (
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col space-y-1">
          <label className="leading-7 text-base font-semibold text-gray-800">
            Destination Address to Deliver
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
                updateIncreaseProgress(5);
                setI1(2);
                console.log('as',i1);
                
              }
              if (!scoreRequire[0].score) {
                updateDecreaseProgress(5);
                console.log('asas',i1);
                
                setI1(1);
              }
            }}
            name="productName"
            placeholder="Enter"
            className="bg-white placeholder:leading-6  rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-[1px] px-2 leading-8 transition-colors duration-200 ease-in-out"
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
              updateIncreaseProgress(5);
              setI3(2);
            }
            if (!scoreRequire[2].score) {
              updateDecreaseProgress(5);
              setI3(1);
            }
          }}
          options={[
            
            {
              value: "Cash on Delivery (COD)",
              label: "Cash on Delivery (COD)",
            },
            {
              value: "Check",
              label: "Check",
            },
            
            {
              value: "Delivery Point",
              label: "Delivery Point",
            },
            {
              value: "Online Payment(phonePay,paytm)",
              label: "Online Payment(phonePay,paytm)",
            },
            
          ]}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label className="leading-7 text-base font-semibold text-gray-800">
          Required Company details
        </label>
        <textarea
          type="text"
          value={require.company}
          id="aboutProduct"
          rows={5}
          onChange={(e) => {
            setRequire((prev) => ({
              ...prev,
              company: e.target.value,
            }));
          }}
          onBlur={() => {
            updateRequirements(require);
            require.company?.length != 0
              ? (scoreRequire[3].score = true)
              : (scoreRequire[3].score = false);
            if (scoreRequire[3].score && i4 == 1) {
              updateIncreaseProgress(8);
              setI4(2);
            }
            if (!scoreRequire[3].score) {
              updateDecreaseProgress(8);
              setI4(1);
            }

            // score[0] && i==1 ? updateIncreaseProgress(5)  : updateDecreaseProgress(5);
          }}
          name="productName"
          placeholder="Please indicate your company details"
          className="bg-white placeholder:leading-6  rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Destination;
