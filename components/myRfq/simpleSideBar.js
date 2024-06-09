import { SideBar } from "@/useStore/sideBar";
import Link from "next/link";
import React from "react";
import { AiOutlineDollar, AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { GiArcheryTarget } from "react-icons/gi";
import { MdOutlineAccountCircle, MdOutlineEmail } from "react-icons/md";

const options = [
  { label: "My Account", value: "account", link: "/myRfq/userProfile" },
  
  { label: "Inquiries", value: "inquiries", link: "/myRfq/inquiryList" },
  { label: "Rfqs", value: "rfqs", link: "/myRfq/rfqList" },
  
 
];

const SimpleSideBar = () => {
  const [linkActive, titleActive, updateLinkActive, updateTitleActive] =
    SideBar((store) => [
      store.linkActive,
      store.titleActive,
      store.updateLinkActive,
      store.updateTitleActive,
    ]);
  return (
    <div className="md:h-[640px]  bg-white  py-8 overflow-y-auto w-full scroll-smooth">
      <div className="flex flex-col space-y-4">
        {options.map((item) => {
          return (
            <Link href={item.link}>
              <div
                className={`flex space-x-2 mx-4  px-2 cursor-pointer  py-2 rounded-xl items-center ${
                  linkActive == item.value
                    ? "bg-cyan-600 text-white"
                    : "bg-transparent hover:bg-gray-100 text-gray-800"
                } `}
                onClick={() => {
                  updateLinkActive(item.value);
                  // updateTitleActive("home");
                }}
              >
                {item.value == "inquiries" ? (
                  <MdOutlineEmail
                    size={20}
                    className={`font-bold `}
                  />
                ) : item.value == "rfqs" ? (
                  <GiArcheryTarget
                    size={20}
                    className={`font-bold`}
                  />
                ) : item.value == "account" ? (
                  <MdOutlineAccountCircle
                    size={20}
                    className={`font-bold `}
                  />
                ) : (
                  <AiOutlineSetting
                    size={20}
                    className={`font-bold`}
                  />
                )}
                <p
                  className={`font-semibold text-gray-800 text-lg ${
                    linkActive == item.value ? " text-white" : " text-gray-800"
                  }  `}
                >
                  {item.label}
                </p>
                
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleSideBar;
