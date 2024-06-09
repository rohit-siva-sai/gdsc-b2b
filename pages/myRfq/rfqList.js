import AllRfqs from "@/components/myRfq/allRfqs";

import SimpleSideBar from "@/components/myRfq/simpleSideBar";
import { db } from "@/config/firebase";
import { Common } from "@/useStore/common";
import { Drawer } from "antd";
import { collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";

const RfqList = ({rfqData }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [modifiedRfqData,setModifiedfqData] = useState([])
  const [user] = Common((store) => [store.user])


  const removeCommon = ()=>{
    const data = rfqData.filter((item)=> item.user==user.uid )
    setModifiedfqData(data)
    // console.log('data',data);
    
  }
  useEffect(()=>{
    removeCommon()
  },[rfqData])
  const onClose = () => {
    setShowFilter(false);
  };
  const showDrawer = () => {
    setShowFilter(!showFilter);
  };
  // const rfqCollection = collection(db, "rfqs");
  // const [rfqData, setRfqData] = useState([]);
  // const getRfq = async (id) => {
  //   try {
  //     const data = await getDocs(rfqCollection);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     const rfq = filteredData.filter((item) => item.user == user.uid);
  //     setRfqData(rfq);
  //     console.log("ssassa", rfq);
  //     // console.log("usedatadfinprofile", userData[0]);
  //     // const sliceData = userData[0];
  //     // console.log(sliceData, "slicedata");

  //     // setProfileUser(sliceData);
  //     // console.log("rohit siva sai", profileUser);
  //     // // getCurrentUser(profileUser)
  //     // if (sliceData && sliceData.id === id) return true;
  //     // else return false;
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // useEffect(() => {
  //   getRfq();
  // }, [user]);
  return (
    <div className="md:h-[640px] md:overflow-hidden">
      <div className="flex">
        <div className=" hidden md:block w-1/6">
          {/* <Sidebar /> */}
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
        <AllRfqs rfqData={modifiedRfqData} />
      </div>
    </div>
  );
};

export default RfqList;
