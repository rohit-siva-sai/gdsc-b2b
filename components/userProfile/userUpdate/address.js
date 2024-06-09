import { User } from "@/useStore/user";
import { Select } from "antd";
import React from "react";
import { useState } from "react";

const Address = () => {
  const [userAddress, updateAddress] = User((store) => [
    store.userAddress,
    store.updateAddress,
  ]);
  // console.log('address',userAddress);
  
  const [add, setAdd] = useState(userAddress)
  return (
    <div className="felx flex-col space-y-2">
      <div className="flex flex-col space-y-1 ">
        <label className="leading-7 text-sm font-semibold text-gray-800">
          Bussiness Address
        </label>
        <input
          type="text"
          value={add?.bussinessAddress}
          id="productName"
          onChange={(e) => {
            setAdd((prev) => ({ ...prev, bussinessAddress: e.target.value }));
          }}
          onBlur={() => {
            updateAddress(add)
          }}
          name="firstName"
          placeholder="Compant Name,floor"
          className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="grid grid-cols-3 gap-x-2">
        <div className="flex flex-col space-y-1 ">
          <label className="leading-7 text-sm font-semibold text-gray-800">
            City/Town
          </label>
          <input
            type="text"
            value={add?.city}
            id="productName"
            onChange={(e) => {
              setAdd((prev) => ({ ...prev, city: e.target.value }));
            }}
            onBlur={() => {
              updateAddress(add);
            }}
            name="firstName"
            placeholder=""
            className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="flex flex-col space-y-1 ">
          <label className="leading-7 text-sm font-semibold text-gray-800">
            Province/State
          </label>
          <input
            type="text"
            value={add?.state}
            id="productName"
            onChange={(e) => {
              setAdd((prev) => ({ ...prev, state: e.target.value }));
            }}
            onBlur={() => {
              updateAddress(add);
            }}
            name="firstName"
            placeholder=""
            className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="flex flex-col space-y-1 ">
          <label className="leading-7 text-sm font-semibold text-gray-800">
            Zip Code
          </label>
          <input
            type="number"
            value={add?.pincode}
            id="productName"
            onChange={(e) => {
              setAdd((prev) => ({ ...prev, pincode: e.target.value }));
            }}
            onBlur={() => {
              updateAddress(add);
            }}
            name="firstName"
            placeholder=""
            className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-1 ">
        <label className="leading-7 text-sm font-semibold text-gray-800">
          Region<span className="text-red-600 text-lg">*</span>
        </label>
        <Select
          // defaultValue="Bussiness Service"
          value={add?.country}
          placeholder="Select One"
          className="w-full md:w-full text-sm font-semibold"
          onChange={(value) => {
            setAdd((prev) => ({ ...prev, country: value }));
          }}
          onBlur={() => {
            updateAddress(add);
          }}
          options={[
            {
              value: "Andhra Pradesh",
              label: "Andhra Pradesh"
            },
            {
              value: "Teangana",
              label: "Teangana"
            },
            {
              value: "Harayana",
              label: "Harayana"
            },
            {
              value: "Tamil Naidu",
              label: "Tamil Naidu"
            },
            
            {
              value: "Karnataka",
              label: "Karnataka"
            },
            
          ]}
        />
      </div>
    </div>
  );
};

export default Address;
