import { Company } from '@/useStore/company';
import React from 'react'
import { useState } from 'react';

const PanCardNo = () => {
  const [panCardNo, updatePanCardNo] = Company((store) => [store.panCardNo, store.updatePanCardNo]);
  const [card,setCard] = useState(panCardNo)
return (
  <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-sm font-semibold text-gray-800">
        Pan Card Number<span className="text-red-600 text-lg">*</span>
      </label>
      <input
        type="text"
        value={card}
        id="productName"
        onChange={(e) => {
          setCard(e.target.value);
        }}
        onBlur={() => {
          updatePanCardNo(card)  
        }}
        name="firstName"
        placeholder="Ex: ABCTY1234D"
        className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
)
}

export default PanCardNo
