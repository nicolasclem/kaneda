// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTFCGs7-4ry1NqGZ94LCz4i8oM2g6747c",
  authDomain: "kaneda-coder.firebaseapp.com",
  projectId: "kaneda-coder",
  storageBucket: "kaneda-coder.appspot.com",
  messagingSenderId: "734118658772",
  appId: "1:734118658772:web:b809003f7a9fef3f3b3141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);