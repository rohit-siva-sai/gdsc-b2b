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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
