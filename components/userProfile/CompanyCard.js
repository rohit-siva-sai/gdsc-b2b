import { Company } from "@/useStore/company";
import React from "react";
import { HiPencil } from "react-icons/hi";

const CompanyCard = ({ name,title, value }) => {
  // console.log(title,Array.isArray(value));
  const array = Array.isArray(value);
  const [updateCompanyUpdate, updateOpenCompanyModel] = Company((store) => [
    store.updateCompanyUpdate,
    store.updateOpenCompanyModel,
  ]);
  return (
    <div className="grid grid-cols-3  border">
      <div className="py-4 px-3 text-xs md:text-base col-span-1 bg-gray-200/50 text-gray-600  font-semibold">
        {title}
      </div>
      {array ? (
        <div className="flex col-span-2 py-4 px-4 space-x-2 items-center cursor-pointer group">
          <div className=" flex-1  flex flex-wrap     font-semibold text-gray-800">
            {value.map((item) => (
              <p className="pr-2 text-sm md:text-base">{item},</p>
            ))}
          </div>
          <HiPencil
            size={22}
            className="invisible group-hover:visible hover:text-cyan-500 "
            onClick={() => {
              updateCompanyUpdate(name);
              updateOpenCompanyModel(true);
            }}
          />
        </div>
      ) : (
        <div className="flex col-span-2 py-4 px-4 space-x-2 items-center cursor-pointer group">
          <div className=" flex-1 text-sm md:text-base font-semibold text-gray-800">{value}</div>
          <HiPencil
            size={22}
            className="invisible group-hover:visible hover:text-cyan-500 "
            onClick={() => {
              updateCompanyUpdate(name);
              updateOpenCompanyModel(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CompanyCard;
