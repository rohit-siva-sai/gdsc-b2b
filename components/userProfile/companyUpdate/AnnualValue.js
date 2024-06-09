import { Company } from '@/useStore/company';
import { Select } from 'antd';
import React from 'react'
import { useState } from 'react';

const AnnualValue = () => {
  const [annualValue, updateAnnualValue] = Company((store) => [
    store.annualValue,
    store.updateAnnualValue,
  ]);
  const [annual, setAnnual] = useState(annualValue);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-sm font-semibold text-gray-800">
       Annual Sourcing Value(in rupee)<span className="text-red-600 text-lg">*</span>
      </label>
      <Select
        // defaultValue="Bussiness Service"
        value={annual}
        placeholder="Select One"
        className="w-full md:w-full text-sm font-semibold"
        onChange={(value) => {
          setAnnual(value);
        }}
        onBlur={() => {
          updateAnnualValue(annual);
        }}
        options={[
          {
            value: "under ₹100,000",
            label: "under ₹100,000",
          },
          {
            value: "₹100,001 - 500,000",
            label: "₹100,001 - 500,000",
          },
          {
            value: "₹500,001 - 1,000,000",
            label: "₹500,001 - 1,000,000",
          },
          {
            value: "₹1,000,001 - 5,000,000",
            label: "₹1,000,001 - 5,000,000",
          },
          {
            value: "₹5,000,001 - 10,000,000",
            label: "₹5,000,001 - 10,000,000",
          },
          {
            value: "₹10,000,001 - 50,000,000",
            label: "₹10,000,001 - 50,000,000",
          },
          
        ]}
      />
      
    </div>
  );
}

export default AnnualValue
