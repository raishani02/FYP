// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp83U8Ea1lz0yCayNuNkdaXie048G6Wy4",
  authDomain: "bestucation-82962.firebaseapp.com",
  projectId: "bestucation-82962",
  storageBucket: "bestucation-82962.appspot.com",
  messagingSenderId: "450489906720",
  appId: "1:450489906720:web:9e02290f9906c5210cae45",
  measurementId: "G-944NV0M7MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);