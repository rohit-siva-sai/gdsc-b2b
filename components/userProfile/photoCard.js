import React from "react";
import { User } from "@/useStore/user";
import { HiPencil } from "react-icons/hi";

const PhotoCard = ({  }) => {
  const [updateUserUpdate, openUserModel, updateOpenUserModel,userDetails] = User(
    (store) => [
      store.updateUserUpdate,
      store.openUserModel,
      store.updateOpenUserModel,
      store.userDetails
    ]
  );
  return (
    <div className="flex flex-col items-center   space-y-3">
      <picture>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIn-gE6j6sjvg0ekFgFBIzVP5VdN3aBu9dLg&usqp=CAU"  className="w-28 border h-28 rounded-full  bg-gray-s100 "  />
       </picture>
      <div className="flex items-center space-y-2 flex-col">
        <div className="flex  space-x-3 items-center cursor-pointer group">
          <p className="font-semibold text-lg text-gray-700">
            {userDetails?.username?.firstName} {userDetails?.username?.lastName}
          </p>
          <HiPencil
            size={20}
            className="hidden group-hover:block hover:text-cyan-500 "
            onClick={() => {
              updateUserUpdate("username");
              updateOpenUserModel(true);
            }}
          />
        </div>
        <div className="flex space-x-3 items-center cursor-pointer group">
          <p className="font-normal text-base text-gray-600">
            {userDetails?.job?.jobTitle}
          </p>
          <HiPencil
            size={20}
            className="hidden group-hover:block hover:text-cyan-500 "
            onClick={() => {
              updateUserUpdate("jobTitle");
              updateOpenUserModel(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
