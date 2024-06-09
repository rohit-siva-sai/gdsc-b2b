import { Company } from '@/useStore/company';
import { Seller } from '@/useStore/seller';
import { Select } from 'antd';
import React from 'react'
import { useState } from 'react';

const Suppliers = () => {
  const [suppliers, updateSuppliers] = Company((store) => [
    store.suppliers,
    store.updateSuppliers,
  ]);
  const [updateSellerCategory, sellerCategory] = Seller((store) => [
    store.updateSellerCategory,
    store.sellerCategory,
  ]);
  const [supply, setSupply] = useState(sellerCategory);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-sm font-semibold text-gray-800">
      Types of suppliers you are for<span className="text-red-600 text-lg">*</span>
      </label>
      <Select
        // defaultValue="Bussiness Service"
        
        allowClear
        maxTagCount="responsive"
        value={supply}
        placeholder="Select One"
        className="w-full md:w-full text-sm font-semibold"
        onChange={(value) => {
          setSupply(value);
        }}
        onBlur={() => {
          updateSellerCategory(supply)
          updateSuppliers(supply)
        }}
        options={[
          {
            value: "industrial materials",
            label: "industrial materials",
          },
          {
            value: "chemicals",
            label: "chemicals",
          },
          {
            value: "resins",
            label: "resins",
          },
          {
            value: "Not Applicable",
            label: "Not Applicable",
          },
         
         
        ]}
      />
      
    </div>
  );
}

export default Suppliers
