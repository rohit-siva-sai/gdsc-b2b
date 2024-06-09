import { Company } from "@/useStore/company";
import React from "react";
import { useState } from "react";

const CompanyName = () => {
  const [company, updateCompany] = Company((store) => [
    store.company,
    store.updateCompany,
  ]);
  // console.log('ssasas',company);
  

  const [name, setName] = useState(company);
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col space-y-1 ">
        <label className="leading-7 text-sm font-semibold text-gray-800">
          Company Name<span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          value={name?.companyName}
          id="productName"
          onChange={(e) => {
            setName((prev) => ({ ...prev, companyName: e.target.value }));
          }}
          onBlur={() => {
            updateCompany(name);
          }}
          name="firstName"
          placeholder="Ex:Microsoft"
          className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="flex flex-col space-y-1 ">
        <label className="leading-7 text-sm font-semibold text-gray-800">
          Year Established
        </label>
        <input
          type="number"
          value={name?.year}
          id="lastName"
          onChange={(e) => {
            setName((prev) => ({ ...prev, year: e.target.value }));
          }}
          onBlur={() => {
            updateCompany(name);
          }}
          name="lastName"
          placeholder=""
          className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default CompanyName;
