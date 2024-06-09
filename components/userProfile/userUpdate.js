import { User } from "@/useStore/user";
import React, { useMemo } from "react";
import UserName from "./userUpdate/username";
import JobDetail from "./userUpdate/jobDetail";
import Email from "./userUpdate/email";
import Address from "./userUpdate/address";
import Website from "./userUpdate/website";
import Linkedin from "./userUpdate/linkedin";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Toaster, toast } from "react-hot-toast";
import { SideBar } from "@/useStore/sideBar";

const UserUpdate = ({  }) => {
  const [
    phoneNumber,
    userId,
    username,
    address,
    job,
    companyWebsite,
    linkedinProfile,
    email,
    userUpdate,
    updateOpenUserModel,
  ] = User((store) => [
    store.phoneNumber,
    store.userId,
    store.username,
    store.userAddress,
    store.job,
    store.companyWebsite,
    store.linkedinProfile,
    store.userEmail,
    store.userUpdate,
    store.updateOpenUserModel,
  ]);
  const [updateUserChange] = SideBar((store) => [store.updateUserChange]);

  // console.log("usessssr", userId);

  // console.log("update", phoneNumber);
  // console.log("update", userUpdate);
  const updateUser = async (id) => {
    const userDoc = doc(db, "users", id);
    console.log('address',address);
    

    await updateDoc(userDoc, {
      username,
      address,
      job,
      companyWebsite: companyWebsite,
      linkedinProfile,
      email,
    });
    console.log("updated successfully");
    // toast.success("Updated Successfully", {
    //   duration: 500,
    //   position: "top-center",
    //   style: {
    //     background: "black",
    //     color: "white",
    //   },
    // });
    updateUserChange()
    updateOpenUserModel(false);
    // await getUser(id);
  };

  return (
    <div>
      <Toaster />
      <div className="relative">
        <div
          className={`py-3 relative md:px-4 ${
            userUpdate == "all" ? "h-[500px]" : "h-[300px]"
          }  overflow-y-auto  border-t flex flex-col space-y-2`}
        >
          {(userUpdate == "username" || userUpdate == "all") && <UserName />}
          {(userUpdate == "jobTitle" || userUpdate == "all") && <JobDetail />}
          {(userUpdate == "email" || userUpdate == "all") && <Email />}
          {(userUpdate == "address" || userUpdate == "all") && <Address />}
          {(userUpdate == "companyWebsite" || userUpdate == "all") && (
            <Website />
          )}
          {(userUpdate == "linkedinProfile" || userUpdate == "all") && (
            <Linkedin />
          )}
        </div>
        <div className="bg-gray-50 sticky flex justify-center -bottom-5  py-2 ">
          <div
            className="bg-rose-500 py-1 px-8 hover:opacity-80 rounded-3xl font-semibold text-white cursor-pointer"
            onClick={() => {
              updateUser(userId);
            }}
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
