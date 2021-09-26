import { GoogleAuthProvider, signInWithPopup, User } from "@firebase/auth";
import { firebaseAuth, googleAuthProvider } from "..";
import { createGuard } from "../../../utils";
import { AuthStatus } from "../types";

export const authFromGoogle = async () => {
  return await signInWithPopup(firebaseAuth, googleAuthProvider)
    .then((result) => {
      //login

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      return credential;
    });
};

export const getAuthResult = async (
  middleware: (user: User) => void,
  reAuth?: boolean
) => {
  firebaseAuth.onAuthStateChanged(async (user) => {
    if (user) {
      middleware(user);
    } else if (reAuth) {
      const user = await authFromGoogle();
      const guard = createGuard<User>("displayName");

      if (guard(user)) {
        middleware(user);
      }
    }
  });
};

export const getLogOut = async (
  middleware: () => void,
  getMessage?: (type: AuthStatus) => void
) => {
  firebaseAuth
    .signOut()
    .then(
      () => {
        getMessage && getMessage("success");
      },
      () => {
        getMessage && getMessage("error");
      }
    )
    .finally(() => middleware());
};
