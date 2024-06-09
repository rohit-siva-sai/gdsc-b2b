import React, { useRef, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { RxCross2 } from "react-icons/rx";
import { MdArrowBackIosNew } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
// import OTPInput, { ResendOTP } from "otp-input-react";
import OtpInput from "react-otp-input";
// import { auth } from "../../config/firebase";
import { firebase } from "firebase/compat/app";
import {
  RecaptchaVerifier,
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";

import { useEffect } from "react";

import { useRouter } from "next/router";
import { useMemo } from "react";
import { User } from "@/useStore/user";
// import Sellercategory from "./sellerCategory";
// import Category from "../rfq/productInfo/category";
import { Seller } from "@/useStore/seller";
import { Common } from "@/useStore/common";


const Login = ({
  changeShowLogin,
  getPhoneNumber,
}) => {
  const [updateUserId] = User((store) => [store.updateUserId]);
  const [updateUser] = Common((store) => [store.updateUser]);
  

  const [phoneNumber, setPhoneNumber] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const refPhone = useRef();

  // const logOut = async () => {
  //   signOut(getAuth())
  //     .then(() => {
  //       console.log("Sign-out successful.");

  //       handleUser(null);
  //       // router.push("/profile");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       console.log(error);
  //     });
  // };
  const auth = getAuth();

  const onCaptchaVerify = async () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        getAuth(),
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            return;
          },
          "expired-callback": () => {},
        }
      );
    }
  };

  const onSignup = () => {
    if (
  
      phoneNumber == " " ||
      phoneNumber.length != 13 ||
      phoneNumber == undefined
    ) {
      toast.error("Enter all the deatils")
      return setError("Enter valid Phone Number");
    }
    setLoading(true);
    
    onCaptchaVerify();
    
    const appVerify = window.recaptchaVerifier;
  

    signInWithPhoneNumber(getAuth(), phoneNumber, appVerify)
      .then((confirmationResult) => {
      

        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        getPhoneNumber(phoneNumber);
        toast.success("otp sent successfully");

      
      })
      .catch((error) => {
      
        console.log(error.message, "tjis sabdu");
        setError(error.message);
        setLoading(false);
      });
  };

  const onOTPVerify = () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log("sdcd", res);
        updateUser(res.user)
        updateUserId(res.user.uid)
      

        localStorage.setItem("userDetails", JSON.stringify(res.user));
       
        changeShowLogin(false);
        
    
      })
      .catch((err) => {
        console.log(err, "wedwede");
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <Toaster toastOptions={{ duration: 1000 }} />
      <div className="w-screen h-screen fixed  z-50 bg-gray-800 opacity-50"></div>
      <div className="w-[700px] transition-all duration-200 h-[450px] rounded-lg pb-6 pt-4 bg-gray-100 fixed top-1/2 left-1/2 z-50 opacity-100 -translate-x-[50%] -translate-y-[50%] ">
        <div className="grid grid-cols-2 mx-6 ">
          <div>
            <p className="text-lg text-gray-600 font-semibold pt-8">
              Empower Your Business with Unparalleled Advantage{" "}
            </p>
          </div>
          <div>
            <div
              onClick={() => {
                changeShowLogin(false);
              }}
              className="p-2 w-fit ml-auto mb-2 mr-4 cursor-pointer rounded hover:bg-blue-100"
            >
              <RxCross2 className="text-xl text-blue-500 font-bold" />
            </div>
            {showOtp ? (
              <div className="w-full h-[330px] flex flex-col items-center space-y-4 rounded-lg  py-8 bg-white">
                <div className=" font-semibold flex bordre  self-start text-gray-700  text-lg">
                  <div
                    onClick={() => {
                      setShowOtp(false);
                    }}
                    className="pl-4 cursor-pointer"
                  >
                    <MdArrowBackIosNew className="text-xl text-blue-500" />
                  </div>
                  <p className="pl-16">Enter 6 digit OTP</p>
                </div>
                <div className="bg-white">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    autoFocus
                    numInputs={6}
                    renderInput={(props) => <input {...props} />}
                    // renderSeparator={<span>-</span>}
                    // containerStyle={{padding: "10px"}}
                    inputStyle={{
                      fontSize: "30px",
                      border: "1px solid gray ",
                      marginInline: "5px",
                      width: "40px",
                      height: "40px",
                    }}
                    // className="p-4 border"
                    // otpType="number"
                    // disabled={false}
                    // style={{ border: "2px" }}
                    // className="border"
                  />
                </div>
                <div
                  onClick={onOTPVerify}
                  className="flex items-center  w-fit rounded-md py-2 px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-2"
                >
                  <p>
                    {loading && (
                      <FiLoader className="text-white text-2xl animate-spin" />
                    )}
                  </p>
                  <p className="text-white text-sm font-semibold md:block hidden ">
                    Verify OTP
                  </p>
                </div>
                <div className="flex items-center space-x-10  ">
                  <p className="text-sm font-semibold">
                    Didn&apos;t recieve the code ?
                  </p>
                  <div
                    onClick={onSignup}
                    className="text-blue-500 cursor-pointer uppercase font-bold  text-base md:block hidden "
                  >
                    Resend OTP
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-[330px] flex flex-col items-center space-y-4  rounded-lg  py-4 bg-white">
                <p className="self-start font-semibold px-8  text-gray-700  text-lg">
                  LogIn or SignUp
                </p>
                <div className="w-full pb-4">{/* <Sellercategory/> */}</div>
                <div className="mt-4">
                  <PhoneInput
                    placeholder="Enter phone number"
                    defaultCountry="IN"
                    autoFocus
                    value={phoneNumber}
                    ref={refPhone}
                    onChange={setPhoneNumber}
                    className="border-2 outline-none rounded-lg  px-2 py-2 hover:border-blue-500 text-gray-600 text-xl font-semibold"
                  />
                </div>
                <div id="recaptcha-container"></div>
                <div
                  onClick={onSignup}
                  className="flex items-center md:px-16 w-fit rounded-md py-2 px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-2"
                >
                  {loading && (
                    <FiLoader className="text-white text-2xl animate-spin" />
                  )}
                  <p className="text-white text-xl font-semibold md:block hidden ">
                    Continue
                  </p>
                </div>
              </div>
            )}
            <p className="text-[10px] font-bold pt-2 pl-1 text-gray-400">
              By continuing you agree to our Terms of Service & Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
