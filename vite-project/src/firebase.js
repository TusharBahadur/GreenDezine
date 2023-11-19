// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBRdCFs1xlex5DcArGBzZrQehvtXPd5Z0g",
  authDomain: "greendezine-7f577.firebaseapp.com",
  projectId: "greendezine-7f577",
  storageBucket: "greendezine-7f577.appspot.com",
  messagingSenderId: "935945421454",
  appId: "1:935945421454:web:9e34a2fb4d776dc8d57fdf",
  measurementId: "G-NTSNB7GTFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

