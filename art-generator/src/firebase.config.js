// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-nyG78acuBDV9as9h5Ju9WZG9lEiWJs0",
  authDomain: "art-generator-ee319.firebaseapp.com",
  projectId: "art-generator-ee319",
  storageBucket: "art-generator-ee319.appspot.com",
  messagingSenderId: "481336666318",
  appId: "1:481336666318:web:b73beef004eb54359d889f",
  measurementId: "G-VZB41FQ2E1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireStore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage};