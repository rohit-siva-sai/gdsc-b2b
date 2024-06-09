import { Common } from "@/useStore/common";
import React from "react";
import Login from "./login";
import { FaTag, FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { User } from "@/useStore/user";
import { SideBar } from "@/useStore/sideBar";

const Navbar = () => {
  const [userDetails] = User((store)=>[store.userDetails])
  const [ updateUserChange] = SideBar((store) => [
   
    store.updateUserChange,
  ]);

  const [showLogin, changeShowLogin, user] = Common((store) => [
    store.showLogin,
    store.changeShowLogin,
    store.user,
  ]);const router = useRouter()
  return (
    <>
      {showLogin && <Login changeShowLogin={changeShowLogin} />}
      <div className="flex sticky top-0 py-1 px-8 shadow justify-between items-center bg-white z-40">
        <div>
          <Link href={"/"}>
            <picture>
              <img
                src="https://www.shutterstock.com/image-vector/creative-design-word-b2b-600nw-2355011677.jpg"
                alt=""
                className="w-12 md:w-24 "
              />
            </picture>
          </Link>
        </div>
        <div className="flex  space-x-6">
          <Link href={"/rfq"}>
            <div className=" px-2 md:px-4 py-1 bg-cyan-600 text-white font-semibold text-lg rounded-md cursor-pointer ">
              New Trade
            </div>
          </Link>
          {/* <div className='px-4 py-1   text-white font-semibold text-lg rounded-md  cursor-pointer'>
            Log In
        </div> */}
          <div
            onClick={() => {
              !user && changeShowLogin(true)
              user && updateUserChange() && router.push("/myRfq/userProfile");
            }}
            className="flex   overflow-x-hidden items-center md:px-8 text-center rounded-md py-2 px-2 cursor-pointer hover:bg-cyan-600 bg-cyan-600 space-x-2"
          >
            <FaRegUserCircle className="text-white " size={20} />
            {user ? (
              <p className="text-white font-semibold md:block hidden ">
                Welcome
                {userDetails?.username?.firstName?.length > 2 && <span>,{userDetails?.username?.firstName}</span> }
              </p>
            ) : (
              <p className="text-white font-semibold md:block hidden ">Login</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
