// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq7L9J6Z-hiaSzZ2FbCd8YoOWkSSiwhDQ",
  authDomain: "contraverso-b6790.firebaseapp.com",
  projectId: "contraverso-b6790",
  storageBucket: "contraverso-b6790.appspot.com",
  messagingSenderId: "504400402469",
  appId: "1:504400402469:web:05b16bac690a780b51c7cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);