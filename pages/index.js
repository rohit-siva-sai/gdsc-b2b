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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={``}
    >
      <Main1 />
    </main>
  );
}
