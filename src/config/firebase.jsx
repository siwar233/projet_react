
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzcIjV2EpTL0T3Qox0OXdN9uZslRfNPlg",
  authDomain: "projet-449c6.firebaseapp.com",
  projectId: "projet-449c6",
  storageBucket: "projet-449c6.appspot.com",
  messagingSenderId: "612908787673",
  appId: "1:612908787673:web:07ebc190ac62c9ab8d5bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);
export const auth = getAuth(app);