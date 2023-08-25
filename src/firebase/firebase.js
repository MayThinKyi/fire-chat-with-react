// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ1zl-_AEk5GHvKDWIhz97icW1Rxx2lYQ",
  authDomain: "fire-chat-72c43.firebaseapp.com",
  projectId: "fire-chat-72c43",
  storageBucket: "fire-chat-72c43.appspot.com",
  messagingSenderId: "321124799680",
  appId: "1:321124799680:web:c38feffed31dfec6794925"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
