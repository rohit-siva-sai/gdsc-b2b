
import ComapnyDetails from "@/components/userProfile/companyDetails";
import UserDetails from "@/components/userProfile/userDetails";
import React from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { db } from "@/config/firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { User } from "@/useStore/user";
import { Company } from "@/useStore/company";
import { Drawer } from "antd";
import SimpleSideBar from "@/components/myRfq/simpleSideBar";
import { Seller } from "@/useStore/seller";

const Home = ({ user, phoneNumber,updateSellerCategory }) => {
  const [
    updatePhoneNumber,
    updateUserDetails,
    userId,
    updateUserId,
    userAddress,
    job,
    companyWebsite,
    linkedinProfile,
  ] = User((store) => [
    store.updatePhoneNumber,
    store.updateUserDetails,
    store.userId,
    store.updateUserId,
    store.userAddress,
    store.job,
    store.companyWebsite,
    store.linkedinProfile,
  ]);
  const [
    company,
    bussinessType,
    companySize,
    sellingChannel,
    annualValue,
    suppliers,
    marketImport,
    marketSell,
    purchasingRole,
    panCardNo,
    gstNo,
    companyUpdate,
  ] = Company((store) => [
    store.company,
    store.bussinessType,
    store.companySize,
    store.sellingChannel,
    store.annualValue,
    store.suppliers,
    store.marketImport,
    store.marketSell,
    store.purchasingRole,
    store.panCardNo,
    store.gstNo,
    store.companyUpdate,
  ]);

  const [showFilter, setShowFilter] = useState(false);
  const [sellerCategory] = Seller((store)=>[store.sellerCategory])

  const onClose = () => {
    setShowFilter(false);
  };
  const showDrawer = () => {
    setShowFilter(!showFilter);
  };

  const [profileUser, setProfileUser] = useState({});

  // const getUser = async (id) => {
  //   try {
  //     const userRef = doc(db, "users", id); // 'people' is the collection name
  //     const userDoc = await getDoc(userRef);

  //     if (userDoc.exists()) {
  //       const userData = userDoc.data();
  //       setProfileUser(userData)
  //       updateUserDetails(userData)
        
  //       updatePhoneNumber(userData.phone_number);
  //       localStorage.setItem("sellerCategory",JSON.stringify(userData?.sellerCategory))
  //       updateSellerCategory(userData?.sellerCategory)
  //       console.log(userData, "rohit siva sai");
  //       return true;
  //     } else {
  //       console.log("No such document!");
  //       return false;
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // const submitNewUser = async (id) => {
  //   const value = await getUser(id)
  //   console.log("value", value);
  //   try {
  //     if (!value) {
  //       await setDoc(doc(db, "users", id), {
  //         username: { firstName: "first", lastName: "Last" },
  //         email: "example@gmail.com",
  //         phone_number: user?.phoneNumber,
  //         job: job,
  //         address: userAddress,
  //         companyWebsite: companyWebsite,
  //         linkedinProfile: linkedinProfile,
  //         company,
  //         bussinessType,
  //         companySize,
  //         sellingChannel,
  //         annualValue,
  //         suppliers,
  //         marketImport,
  //         marketSell,
  //         purchasingRole,
  //         panCardNo,
  //         gstNo,
  //         companyUpdate,
  //         sellerCategory
  //       });
  //       await getUser(id)
  //     } else {
  //       // getUser(currentUser.id);
  //       return;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const logOut = async () => {
  //   signOut(getAuth())
  //     .then(() => {
  //       console.log("Sign-out successful.");
  //       localStorage.removeItem("userDetails");
  //       handleUser(null);
  //       setProfileUser({ username: "", email: "", phone_number: "", cart: [] });
  //       router.push("/");
  //       router.reload();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const updateProfileUser = async (id, updateName, updateEmail) => {
    const userDoc = doc(db, "users", id);

    await updateDoc(userDoc, { username: updateName, email: updateEmail });
    console.log("updated successfully");
    getUser(id);
  };

  const router = useRouter();
  useEffect(() => {
    try {
      if (localStorage.getItem("userDetails")) {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        // console.log("usredd", userDetails);

        // updateUserId(id);
        // submitNewUser(id);

        // getCurrentUser(profileUser)

        // console.log(userDetails.uid);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [router]);
  return (
    <div className="md:h-[640px]  overflow-hidden">
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

        <div className="md:h-[640px] bg-gray-100 px-4  md:px-6 flex-1 pb-8  overflow-y-scroll ">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
