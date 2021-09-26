import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

export const authFromGoogle = () => {
  signInWithPopup(firebaseAuth, googleAuthProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("🚀 ~ file: index.ts ~ line 27 ~ .then ~ user", user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(
        "🚀 ~ file: index.ts ~ line 40 ~ authFromGoogle ~ credential",
        credential
      );
      // ...
    });
};
