import Footer from "@/components/navfoot/footer";
import Navbar from "@/components/navfoot/navbar";
import { db } from "@/config/firebase";
import "@/styles/globals.css";
import { Common } from "@/useStore/common";
import { Company } from "@/useStore/company";
import { Data } from "@/useStore/data";
import { SideBar } from "@/useStore/sideBar";
import { User } from "@/useStore/user";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export default function App({ Component, pageProps }) {
  const [updateUser, user] = Common((store) => [store.updateUser, store.user]);
  const [profileUser, setProfileUser] = useState({});
  const [newRfq, newQuote, userChange, updateNewRfq] = SideBar((store) => [
    store.newRfq,
    store.newQuote,
    store.userChange,
    store.updateNewRfq,
  ]);

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
  const [updateQuoteData] = Data((store) => [store.updateQuoteData]);
  const [i,setI] = useState(1)
  const getUser = async (id) => {
    try {
      const userRef = doc(db, "users", id); // 'people' is the collection name
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();

        // updateSellerCategory(userData?.sellerCategory);
        setProfileUser(userData);
        updateUserDetails(userData);
        if (i == 1) {
          updateNewRfq();
          setI(0);
        }

        updatePhoneNumber(userData.phone_number);
        // localStorage.setItem("sellerCategory",JSON.stringify(userData?.sellerCategory))
        // console.log(userData, "userdata");

        return true;
      } else {
        // console.log("No such document!");
        return false;
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const submitNewUser = async (id) => {
    const value = await getUser(id);
    console.log("value", value);
    try {
      if (!value) {
        await setDoc(doc(db, "users", id), {
          username: { firstName: "first", lastName: "Last" },
          email: "example@gmail.com",
          phoneNumber: 8247646633,
          job: job,
          address: userAddress,
          companyWebsite: companyWebsite,
          linkedinProfile: linkedinProfile,
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
          // sellerCategory,
        });
        await getUser(id);
      } else {
        // getUser(currentUser.id);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const rfqCollection = collection(db, "rfqs");
  const [rfqData, setRfqData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatedRfqData, setUpdatedRfqData] = useState([]);
  const getRfq = async (id) => {
    try {
      // console.log('sller',sellerCategory);

      const data = await getDocs(rfqCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // const user = JSON.parse(localStorage.getItem("userDetails"));
      const rfq = filteredData
        // .filter((item) => item.productCategory[1] == sellerCategory)
        .sort(
          (a, b) =>
            a.timestamp &&
            b.timestamp &&
            b.timestamp["seconds"] - a.timestamp["seconds"]
        );

      setRfqData(rfq);
      // console.log("rfq0,rfq", rfq);

      setUpdatedRfqData(rfq);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };
  useMemo(() => {
    getRfq();
  }, [newRfq]);
  const filterRfqData = (id) => {
    if (id == 0) {
      const data = rfqData.filter((item) => item.starred == true);
      setUpdatedRfqData(data);
    } else {
      console.log("rfadata", rfqData);

      setUpdatedRfqData(rfqData);
    }
  };

  const router = useRouter();
  useEffect(() => {
    try {
      if (localStorage.getItem("userDetails")) {
        const details = JSON.parse(localStorage.getItem("userDetails"));

        const id = details.uid;
        console.log("sddsd", id);

        submitNewUser(id);
        updateUser(details);
        updateUserId(id);

        // getCurrentUser(profileUser)

        // console.log(userDetails.uid);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [userChange]);


  const quoteCollection = collection(db, "quotations");

  const getQuotes = async (id) => {
    try {
      const data = await getDocs(quoteCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // const user = JSON.parse(localStorage.getItem("userDetails"));
      // const rfq = filteredData.filter(
      //   (item) => item.productCategory[1] === "industrial materials"
      // );
      //   .sort((a, b) => b.timestamp["seconds"] - a.timestamp["seconds"]);
      updateQuoteData(filteredData);
      // console.log("filter", rfq);
    } catch (err) {
      console.log(err.message);
      // setIsLoading(false);
    }
  };
  useEffect(() => {
    getQuotes();
  }, [newQuote]);


  return (
    <>
      <Navbar />
      <Component
        {...pageProps}
        rfqData={rfqData}
        isLoading={isLoading}
        filterRfqData={filterRfqData}
        updatedRfqData={updatedRfqData}
      />
      <Footer />
    </>
  );
}
