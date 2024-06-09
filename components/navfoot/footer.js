import { Common } from "@/useStore/common";
import { User } from "@/useStore/user";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const [updateUserId] = User((store) => [store.updateUserId]);
  const [updateUser] = Common((store) => [store.updateUser]);


  
  const logOut = async () => {
    signOut(getAuth())
      .then(() => {
        console.log("Sign-out successful.");
        localStorage.removeItem("userDetails")
       updateUser(null)
       updateUserId(null)
        
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="py-4 border-2  px-12 mt-6">
      <div className="flex  space-x-24 items-start">
        <picture>
          <img
            src="https://www.shutterstock.com/image-vector/creative-design-word-b2b-600nw-2355011677.jpg"
            alt=""
            className="w-24"
          />
        </picture>
        <div className="flex flex-1 justify-around">
          <div className="flex flex-col space-y-2 mt-4">
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                link
              </p>
            </Link>
          </div>
        </div>

        <div className="cursor-pointer" onClick={logOut} >logout</div>
      </div>
    </div>
  );
};

export default Footer;
