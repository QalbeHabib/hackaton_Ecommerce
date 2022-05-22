// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAVcRHPKylnqHPlqzMVdo6j_f3lcik8pAA",

  authDomain: "hackaton-commerce.firebaseapp.com",

  projectId: "hackaton-commerce",

  storageBucket: "hackaton-commerce.appspot.com",

  messagingSenderId: "591691871047",

  appId: "1:591691871047:web:c93b83496c7e78819dd262",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
