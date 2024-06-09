import AllInquiry from "@/components/myRfq/allInquiry";

import SimpleSideBar from "@/components/myRfq/simpleSideBar";
import { db } from "@/config/firebase";
import { Common } from "@/useStore/common";
import { User } from "@/useStore/user";
import { Drawer } from "antd";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineSegment } from "react-icons/md";

const InquiryList = ({  updatedRfqData, filterRfqData, isLoading }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [userDetails] = User((store) => [store.userDetails])
  const [user] = Common((store) => [store.user])

  // console.log('userdetails',updatedRfqData);
  const [modifiedRfqData,setModifiedfqData] = useState([])

  const removeCommon = ()=>{
    const data = updatedRfqData.filter((item)=> !(item.user==user.uid ))
    setModifiedfqData(data)
    // console.log('data',data);
    
  }
  useEffect(()=>{
    removeCommon()
  },[updatedRfqData])

  const onClose = () => {
    setShowFilter(false);
  };
  const showDrawer = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="md:h-[640px] md:overflow-hidden">
      <div className="w-fit ml-auto mt-4 mx-4 cursor-pointer md:hidden block" onClick={showDrawer} >
         <MdOutlineSegment className="text-white rounded-full bg-cyan-600 text-3xl p-1" />
         </div>
      <div className="flex">
        <div className=" hidden md:block w-1/6">
          <SimpleSideBar />
        </div>

        <Drawer
          placement={"left"}
          width={300}
          height={825}
          className=" md:hidden block  "
          open={showFilter}
          onClose={onClose}
        >
          <SimpleSideBar />
        </Drawer>
        <AllInquiry
        
          updatedRfqData={modifiedRfqData}
          filterRfqData={filterRfqData}
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
};

export default InquiryList;
