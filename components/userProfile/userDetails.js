import React from "react";
import UserUpdate from "./userUpdate";
import { useState } from "react";
import { Modal } from "antd";
import { HiPencil } from "react-icons/hi";
import Icon from "./DetailCard";
import DetailCard from "./DetailCard";
import { MdMailOutline } from "react-icons/md";
import { FiLink, FiPhone } from "react-icons/fi";
import { AiOutlineHome, AiOutlineLinkedin } from "react-icons/ai";
import { User } from "@/useStore/user";
import { useEffect } from "react";
import UserName from "./userUpdate/username";
import PhotoCard from "./photoCard";
import { SideBar } from "@/useStore/sideBar";

const UserDetails = ({   }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [
    updateUserName,
    updateJob,
    updateAddress,
    updateUserEmail,
    updateCompanyWebsite,
    updateLinkedinProfile,
    updateUserUpdate,
    openUserModel,
    updateOpenUserModel,
    userDetails
  ] = User((store) => [
    store.updateUserName,
    store.updateJob,
    store.updateAddress,
    store.updateUserEmail,
    store.updateCompanyWebsite,
    store.updateLinkedinProfile,
    store.updateUserUpdate,
    store.openUserModel,
    store.updateOpenUserModel,
    store.userDetails
  ]);
  console.log("userdeatils", userDetails);
  const [userChange] = SideBar((store) => [store.userChange]);
  useEffect(() => {
    if (userDetails) {
      updateUserName(userDetails?.username);
      updateJob(userDetails?.job);
      updateAddress(userDetails?.address);
      updateUserEmail(userDetails?.email);
      updateCompanyWebsite(userDetails?.companyWebsite);
      updateLinkedinProfile(userDetails?.linkedinProfile);
    }
  }, [userChange]);

  return (
    <div className="  ">
      <p className="font-light text-sm py-4">
        RFQs / <span className="font-normal">User Profile</span>
      </p>
      <div className="bg-white rounded-lg  ">
        <div className="px-6 flex py-4 justify-between items-center">
          <p className="font-medium text-xl text-gray-800">Conatct Info</p>
          <div
            onClick={() => {
              updateUserUpdate("all");
              // setModalOpen(true)
              updateOpenUserModel(true);
            }}
            className="cursor-pointer"
          >
            <HiPencil size={25} className="hover:text-cyan-500" />
          </div>

          <Modal
            title="Edit Contact Info"
            centered
            open={openUserModel}
            //   onOk={() => setModalOpen(false)}
            footer={null}
            onCancel={() => updateOpenUserModel(false)}
            width={600}
          >
            <UserUpdate  />
          </Modal>
        </div>
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-2 items-center justify-center py-8 border-t md:divide-y-0 divide-y md:divide-x">
          <div className="  md:w-1/4 ">
            <PhotoCard userDetails={userDetails} />
          </div>

          <div className="md:w-3/4 pl-6 pt-4 md:pt-0  md:pl-24">
            <div className="flex flex-col  space-y-3">
              <DetailCard
                name="email"
                Icon={MdMailOutline}
                title={"Email"}
                value={userDetails?.email}
              />
              <DetailCard
                name="phoneNumber"
                Icon={FiPhone}
                title={"Phone"}
                value={userDetails?.phoneNumber}
              />
              <DetailCard
                name="address"
                Icon={AiOutlineHome}
                title={"Office Address"}
                value={userDetails?.address?.country}
              />
              <DetailCard
                name="companyWebsite"
                Icon={FiLink}
                title={"Company Website"}
                value={userDetails?.companyWebsite}
              />
              <DetailCard
                name="linkedinProfile"
                Icon={AiOutlineLinkedin}
                title={"Linkedin Profile"}
                value={userDetails?.linkedinProfile}
              />
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
