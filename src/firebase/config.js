// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYZl0xK2fkSYTDzcEGZ37TZY8jjtqmOz4",
  authDomain: "petshop-69305.firebaseapp.com",
  projectId: "petshop-69305",
  storageBucket: "petshop-69305.appspot.com",
  messagingSenderId: "475254531879",
  appId: "1:475254531879:web:b32a172b49c7718ae36b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)