// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiTq107aOYNCVYMxk9Gs-jmMgm8oVU5OA",
  authDomain: "mern-book-inventory-8bd60.firebaseapp.com",
  projectId: "mern-book-inventory-8bd60",
  storageBucket: "mern-book-inventory-8bd60.appspot.com",
  messagingSenderId: "619577976878",
  appId: "1:619577976878:web:ed429ad168020bfaf617bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;