import { initializeApp } from "firebase/app";

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
