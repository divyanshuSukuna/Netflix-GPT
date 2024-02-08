/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6upgmNf2jC9lKSOzuYMryBI4pfEH88Cw",
  authDomain: "netflixgpt-822a3.firebaseapp.com",
  projectId: "netflixgpt-822a3",
  storageBucket: "netflixgpt-822a3.appspot.com",
  messagingSenderId: "955692126779",
  appId: "1:955692126779:web:5514d8e0057b29665b421e",
  measurementId: "G-F54XNJTGHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

//Authenticate with firebase
export const auth = getAuth();
