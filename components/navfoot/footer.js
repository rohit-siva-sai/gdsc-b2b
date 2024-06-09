import { Common } from "@/useStore/common";
import { User } from "@/useStore/user";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneVolume, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const [updateUserId] = User((store) => [store.updateUserId]);
  const [updateUser] = Common((store) => [store.updateUser]);

  const logOut = async () => {
    signOut(getAuth())
      .then(() => {
        console.log("Sign-out successful.");
        localStorage.removeItem("userDetails");
        updateUser(null);
        updateUserId(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="py-4 border-2  px-4 md:px-12 mt-6 bg-gray-200">
      <div className="flex space-x-6 md:space-x-24 items-start">
        <Link href={"/"}>
          <picture>
            <img
              src="https://www.shutterstock.com/image-vector/creative-design-word-b2b-600nw-2355011677.jpg"
              alt=""
              className="w-20 md:w-44 rounded-xl"
            />
          </picture>
        </Link>
        <div className="flex md:flex-row flex-col space-y-4 md:space-y-0  flex-1 justify-around">
          <div className="flex flex-col space-y-2 mt-4">
            <Link href={"/"}>
              <p className="font-semibold text-gray-600 text-base hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                Home
              </p>
            </Link>
            <Link href={"/rfq"}>
              <p className="font-semibold text-gray-600 text-base hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                new Trade
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-base hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                About Us
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-base hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                Partner with Us
              </p>
            </Link>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-base hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                Privacy Policy
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-base hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                Terms & Conditions
              </p> 
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-base hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                Returns Policy
              </p>
            </Link>
            <Link href={""}>
              <p className="font-semibold text-gray-600 text-base hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                Terms of Trade
              </p>
            </Link>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
           
              <p className="font-semibold text-gray-800 text-lg hover:underline decoration-2 decoration-cyan-600 underline-offset-2">
                Contact Us
              </p>
            
           <div className="flex items-center space-x-3">
           <FiPhoneCall className="text-cyan-600 text-xl" />
            <p className="font-semibold text-gray-600"> +91 86487 46978</p>
           </div>
           <div className="flex items-center space-x-3">
           <CiMail className="text-cyan-600 text-2xl font-bold" />
            <p className="font-semibold text-gray-600">b2bnetwork@gmail.com</p>
           </div>
          <div className="flex space-x-3 items-center pt-4">
          <Link href={""}>
              <div className="bg-rose-600 w-fit rounded-lg  ">
              <FaYoutube className="text-4xl p-[6px] text-white" />
              </div>
            </Link>
            <Link href={""}>
              <div className="bg-blue-600 w-fit rounded-lg  ">
              <FaFacebook className="text-4xl p-[6px] text-white" />
              </div>
            </Link>
            <Link href={""}>
              <div className="bg-green-600 w-fit rounded-lg  ">
              <FaWhatsapp className="text-4xl p-[6px] text-white" />
              </div>
            </Link>
            <Link href={""}>
              <div className="bg-pink-600 w-fit rounded-lg  ">
              <FaInstagram className="text-4xl p-[6px] text-white" />
              </div>
            </Link>
            <Link href={""}>
              <div className="bg-sky-500 w-fit rounded-lg  ">
              <FaLinkedin className="text-4xl p-[7px] text-white" />
              </div>
            </Link>
          </div>
            
          </div>
        </div>

        {/* <div className="cursor-pointer" onClick={logOut}>
          logout
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
