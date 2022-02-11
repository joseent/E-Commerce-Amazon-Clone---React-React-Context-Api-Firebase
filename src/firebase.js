// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlE3tPpySc7b-68ebwqZHqM0ynjce_4hI",
  authDomain: "e-shop-85db6.firebaseapp.com",
  projectId: "e-shop-85db6",
  storageBucket: "e-shop-85db6.appspot.com",
  messagingSenderId: "251023639931",
  appId: "1:251023639931:web:b1ed69118d35647d6369de",
  measurementId: "G-SSM5QM2PL9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)

export {auth, db}