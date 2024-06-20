// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCshcnh7VHAsbj2l6rxoDhZFVLgsTcRdQ",
  authDomain: "linkedin-clone-c0d0e.firebaseapp.com",
  projectId: "linkedin-clone-c0d0e",
  storageBucket: "linkedin-clone-c0d0e.appspot.com",
  messagingSenderId: "461472245489",
  appId: "1:461472245489:web:50cafd3562bea643a92b50",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCshcnh7VHAsbj2l6rxoDhZFVLgsTcRdQ",
  authDomain: "linkedin-clone-c0d0e.firebaseapp.com",
  projectId: "linkedin-clone-c0d0e",
  storageBucket: "linkedin-clone-c0d0e.appspot.com",
  messagingSenderId: "461472245489",
  appId: "1:461472245489:web:50cafd3562bea643a92b50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export const firestore = getFirestore(app);

export { db, auth };
*/
