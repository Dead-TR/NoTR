import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqN77ygdYm-9SuwTLC0xddMCuh8dI1EPs",
  authDomain: "notr-6524b.firebaseapp.com",
  projectId: "notr-6524b",
  storageBucket: "notr-6524b.appspot.com",
  messagingSenderId: "250836179113",
  appId: "1:250836179113:web:3c29aeedee5b4db33ef1b8",
  measurementId: "G-MZR62J6FEF",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);

export const googleAuthProvider = new GoogleAuthProvider();
export const firebaseAuth = getAuth(firebaseApp);
export const dataBase = getFirestore();
