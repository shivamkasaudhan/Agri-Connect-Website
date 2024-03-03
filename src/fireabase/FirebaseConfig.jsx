// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE3kX_Nl7ud5WkGobDXo_hp2qnUAhYltM",
  authDomain: "agri-connect-ed8ef.firebaseapp.com",
  projectId: "agri-connect-ed8ef",
  storageBucket: "agri-connect-ed8ef.appspot.com",
  messagingSenderId: "810922407238",
  appId: "1:810922407238:web:cdd14e02fb400dc854e147",
  measurementId: "G-TSL41XM3SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);


export {fireDB, auth}