import { User } from "@/useStore/user";
import { Select } from "antd";
import React from "react";
import { useState } from "react";
const options = [
    {
        value: "Engineering",
        children: [
            {
                value: "Director",
                label: "Director",
            },
            {
                value: "Executive",
                label: "Executive",
            },
            {
                value: "Manager",
                label: "Manager",
            },
        ]
    },
    {
        value: "Accounting",
        children: [
            {
                value: "Accounter",
                label: "Accounter",
            },
            {
                value: "CFO",
                label: "CFO",
            },
            {
                value: "Accounting Manager",
                label: "Accounting Manager",
            },
        ]
    },
]

const JobDetail = () => {
  const [job, updateJob] = User((store) => [store.job, store.updateJob]);
  const [level,setLevel] = useState(options)

  
  const showJobLevel = (num)=>{
   
    
     const data = options.filter((item)=> item.value == num )
     setLevel(data[0])
     console.log('level',level,"dtaa",data[0]);
     
  
  }

  const [desc, setDesc] = useState(job);
  console.log("sss", desc);
  return (
    <div className="felx flex-col space-y-2">
      <div className="flex flex-col space-y-1 ">
        <label className="leading-7 text-sm font-semibold text-gray-800">
          Job Title
        </label>
        <input
          type="text"
          value={desc?.jobTitle}
          id="productName"
          onChange={(e) => {
            setDesc((prev) => ({ ...prev, jobTitle: e.target.value }));
          }}
          onBlur={() => {
            updateJob(desc);
          }}
          name="firstName"
          placeholder="Ex:Retail sales Manager"
          className="md:w-full w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-800 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col space-y-1 ">
          <label className="leading-7 text-sm font-semibold text-gray-800">
            Job Category<span className="text-red-600 text-lg">*</span>
          </label>
          <Select
            // defaultValue="Bussiness Service"
            value={desc?.jobCategory}
            placeholder="Select One"
            className="w-full md:w-full text-sm font-semibold"
            onChange={(value) => {
              setDesc((prev) => ({ ...prev, jobCategory: value }));
            }}
            onBlur={() => {
              updateJob(desc)
              showJobLevel(desc?.jobCategory)
            }}
            options={[
              {
                value: "Accounting",
                label: "Accounting",
              },
              {
                value: "Engineering",
                label: "Engineering",
              },
              
            ]}
          />
        </div>
        {desc?.jobCategory && <div className="flex flex-col space-y-1 ">
          <label className="leading-7 text-sm font-semibold text-gray-800">
            Last Name<span className="text-red-600 text-lg">*</span>
          </label>
          <Select
            // defaultValue="Bussiness Service"
            placeholder="Select One"
            value={desc?.jobLevel}

            className="w-full md:w-full text-sm font-semibold"
            onChange={(value) => {
              setDesc((prev) => ({ ...prev, jobLevel: value }));
            }}
            onBlur={() => {
              updateJob(desc);
            }}
            options={level.children}
          />
        </div>}
      </div>
    </div>
  );
};

export default JobDetail;
