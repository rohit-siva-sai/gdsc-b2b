import { User } from "@/useStore/user";
import React from "react";
import { useState } from "react";

const UserName = () => {
  const [username, updateUserName] = User((store) => [
    store.username,
    store.updateUserName,
  ]);
  
  const [name, setName] = useState(username);
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <div className="flex flex-col space-y-1 ">
        <label className="leading-7 text-sm font-semibold text-gray-800">
          First Name<span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          value={name?.firstName}
          id="productName"
          onChange={(e) => {
            setName((prev) => ({ ...prev, firstName: e.target.value }));
          }}
          onBlur={() => {
            updateUserName(name);
             
          }}
          name="firstName"
          placeholder=""
          className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="flex flex-col space-y-1 ">
        <label className="leading-7 text-sm font-semibold text-gray-800">
          Last Name<span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          value={name?.lastName}
          id="lastName"
          onChange={(e) => {
            setName((prev) => ({ ...prev, lastName: e.target.value }));
          }}
          onBlur={() => {
            updateUserName(name);
             
          }}
          name="lastName"
          placeholder=""
          className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default UserName;
