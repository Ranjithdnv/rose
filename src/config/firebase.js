// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOmrROnrMDt8g3iVKgEs2k4cnZaE-7M3A",
  authDomain: "roseeee-1ae1d.firebaseapp.com",
  projectId: "roseeee-1ae1d",
  storageBucket: "roseeee-1ae1d.appspot.com",
  messagingSenderId: "628928139388",
  appId: "1:628928139388:web:67344b502619970e3d39f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
