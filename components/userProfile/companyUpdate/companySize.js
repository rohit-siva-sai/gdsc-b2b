import { Company } from '@/useStore/company';
import { Select } from 'antd';
import React from 'react'
import { useState } from 'react';

const CompanySize = () => {
  const [companySize, updateCompanySize] = Company((store) => [
    store.companySize,
    store.updateCompanySize,
  ]);
  const [size, setSize] = useState(companySize);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-sm font-semibold text-gray-800">
        Comapny Size<span className="text-red-600 text-lg">*</span>
      </label>
      <Select
        // defaultValue="Bussiness Service"
        value={size}
        placeholder="Select One"
        className="w-full md:w-full text-sm font-semibold"
        onChange={(value) => {
          setSize(value);
        }}
        onBlur={() => {
          updateCompanySize(size);
        }}
        options={[
          {
            value: "Less than 10 persons",
            label: "Less than 10 persons",
          },
          {
            value: "11 - 50 persons",
            label: "11 - 50 persons",
          },
          {
            value: "51 - 200 persons",
            label: "51 - 200 persons",
          },
          {
            value: "201 - 500 persons",
            label: "201 - 500 persons",
          },
          {
            value: "501 - 1000 persons",
            label: "501 - 1000 persons",
          },
        ]}
      />
      
    </div>
  );
}

export default CompanySize
