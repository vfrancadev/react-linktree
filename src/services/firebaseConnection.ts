// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7ArdLfwtQkXOXMLgM7SOTh78FVNAxQqs",
  authDomain: "reactlinks-d0275.firebaseapp.com",
  projectId: "reactlinks-d0275",
  storageBucket: "reactlinks-d0275.firebasestorage.app",
  messagingSenderId: "736561648726",
  appId: "1:736561648726:web:51c8f386fa66b5dc6fd7f7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db} ;