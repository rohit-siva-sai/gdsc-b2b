import { User } from '@/useStore/user';
import React from 'react'
import { useState } from 'react';

const Website = () => {
    const [companyWebsite, updateCompanyWebsite] = User((store) => [store.companyWebsite, store.updateCompanyWebsite]);
    const [url,setUrl] = useState(companyWebsite)
  return (
    <div className="flex flex-col space-y-1 ">
        <label className="leading-7 text-sm font-semibold text-gray-800">
          Comapny Website<span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          value={url}
          id="productName"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          onBlur={() => {
            updateCompanyWebsite(url)  
          }}
          name="firstName"
          placeholder=""
          className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
  )
}

export default Website
