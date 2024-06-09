import { Company } from '@/useStore/company';
import React from 'react'
import { useState } from 'react';

const GstNo = () => {
  const [gstNo, updateGstNo] = Company((store) => [store.gstNo, store.updateGstNo]);
  const [gst,setGst] = useState(gstNo)
return (
  <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-sm font-semibold text-gray-800">
        GST Number<span className="text-red-600 text-lg">*</span>
      </label>
      <input
        type="text"
        value={gst}
        id="productName"
        onChange={(e) => {
          setGst(e.target.value);
        }}
        onBlur={() => {
          updateGstNo(gst)  
        }}
        name="firstName"
        placeholder="Ex: 29GGGGG1314R9Z6"
        className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
)
}

export default GstNo
