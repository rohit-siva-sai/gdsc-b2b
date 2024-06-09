import { Company } from '@/useStore/company';
import { Select } from 'antd';
import React from 'react'
import { useState } from 'react';

const SellingChannel = () => {
  const [sellingChannel, updateSellingChannel] = Company((store) => [
    store.sellingChannel,
    store.updateSellingChannel,
  ]);
  const [channel, setChannel] = useState(sellingChannel);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-sm font-semibold text-gray-800">
        Your Selling Channel<span className="text-red-600 text-lg">*</span>
      </label>
      <Select
        // defaultValue="Bussiness Service"
        mode='multiple'
        allowClear
        maxTagCount="responsive"
        value={channel}
        placeholder="Select One"
        className="w-full md:w-full text-sm font-semibold"
        onChange={(value) => {
          setChannel(value);
        }}
        onBlur={() => {
          updateSellingChannel(channel);
        }}
        options={[
          {
            value: "Online Selling",
            label: "Online Selling",
          },
          {
            value: "Distributor",
            label: "Distributor",
          },
          {
            value: "Department Store",
            label: "Department Store",
          },
          {
            value: "Direct Marketing",
            label: "Direct Marketing",
          },
          {
            value: "Social Media",
            label: "Social Media",
          },
          {
            value: "Physical Retail",
            label: "Physical Retail",
          },
          {
            value: "Others",
            label: "Others",
          },
         
        ]}
      />
      
    </div>
  );
}

export default SellingChannel
