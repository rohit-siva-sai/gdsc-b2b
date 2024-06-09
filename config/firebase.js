// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth , GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAirsQGpmjJH-SfVNuFVbNoD_gwv4m6YzA",
  authDomain: "gdsc-92577.firebaseapp.com",
  projectId: "gdsc-92577",
  storageBucket: "gdsc-92577.appspot.com",
  messagingSenderId: "655712559407",
  appId: "1:655712559407:web:45e21146b4743add0f01da",
  measurementId: "G-D42VKMCY51"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBvD49Z-k7mU-62YoeB35eIfb_ly-oBD44",
//   authDomain: "fictiv-clone.firebaseapp.com",
//   projectId: "fictiv-clone",
//   storageBucket: "fictiv-clone.appspot.com",
//   messagingSenderId: "414419659168",
//   appId: "1:414419659168:web:d728a8f07d90620b611cc5",
//   measurementId: "G-845K10SX2X"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
