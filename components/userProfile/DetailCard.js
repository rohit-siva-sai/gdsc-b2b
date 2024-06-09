import { User } from "@/useStore/user";
import { Modal } from "antd";
import React from "react";
import { HiPencil } from "react-icons/hi";

const DetailCard = ({name, Icon, title, value }) => {
  const [userUpdate, updateUserUpdate,updateOpenUserModel] = User((store) => [
    store.userUpdate,
    store.updateUserUpdate,
    store.updateOpenUserModel
  ]);
  
  return (
    <div className="flex items-center">
      <div className="flex space-x-2 items-center  md:w-1/4">
        <Icon className=" text-gray-500 " size={20} />
        <p className=" font-semibold md:text-base text-sm text-gray-600">{title} : </p>
      </div>
      <div className="flex space-x-3 items-center cursor-pointer group">
        <p className="font-semibold md:text-base text-sm text-gray-700 ">&nbsp;{value}</p>
        <HiPencil
          size={20}
          className="invisible group-hover:visible hover:text-rose-500 "
          onClick={() => {
            updateUserUpdate(name);
            updateOpenUserModel(true)
          }}
        />
      </div>
    </div>
  );
};

export default DetailCard;
