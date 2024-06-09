import { Company } from '@/useStore/company';
import { Select } from 'antd';
import React from 'react'
import { useState } from 'react';

const PurchasingRole = () => {
  const [purchasingRole,updatePurchasingRole] = Company((store) => [
    store.purchasingRole,
    store.updatePurchasingRole,
  ]);
  const [role, setRole] = useState(purchasingRole);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-sm font-semibold text-gray-800">
      Your Purchasing Decision Role
      </label>
      <Select
        // defaultValue="Bussiness Service"
        value={role}
        placeholder="Select One"
        className="w-full md:w-full text-sm font-semibold"
        onChange={(value) => {
          setRole(value);
        }}
        onBlur={() => {
          updatePurchasingRole(role);
        }}
        options={[
          {
            value: "Advisory Influence only",
            label: "Advisory Influence only",
          },
          {
            value: "Joint Responsibility",
            label: "Joint Responsibility",
          },
          {
            value: "No Influence",
            label: "No Influence",
          },
          {
            value: "Sole Responsibility",
            label: "Sole Responsibility",
          },
          
        ]}
      />
      
    </div>
  );
}

export default PurchasingRole
