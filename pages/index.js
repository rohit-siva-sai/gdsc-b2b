import Image from "next/image";
import { Inter } from "next/font/google";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, db, googleProvider, storage } from "@/config/firebase";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";
import { createClient } from "@sanity/client";
import { useStore } from "@/useStore/store";
import Main1 from "@/components/home/main1";
import Main2 from "@/components/home/main2";
import Main3 from "@/components/home/main3";
import Main4 from "@/components/home/main4";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`overflow-x-hidden`}
    >
      <Main1 />
      <Main3/>
      <Main2/>
      <Main4/>
    </main>
  );
}
