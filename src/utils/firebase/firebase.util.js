import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiYvf4D-YWMmYV1sI3j12xF9xKf-KxDes",
  authDomain: "crwn-cthothing.firebaseapp.com",
  projectId: "crwn-cthothing",
  storageBucket: "crwn-cthothing.appspot.com",
  messagingSenderId: "377364925560",
  appId: "1:377364925560:web:7d19d7a6a22728689c318d",
};

const firebaseApp = initializeApp(firebaseConfig);

//1. create provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//2. create auth
export const auth = getAuth();

//3. create a function that displays the popup
export const signInnWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//4. get the fire store databae
export const db = getFirestore();

//4. creating a user document from auth
export const createUserDocumentFromAuth = async (userAuth, addtionalData) => {
  if (!userAuth) return;
  //get the actual instance of the loged user
  const userDocRef = doc(db, "users", userAuth.uid);

  // read the signed user from the firebase
  const userSnapshot = await getDoc(userDocRef);

  //if user does not exit the store in the firebase
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};

//create user document from email and password
export const createAuthUseWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

//signin with email and password
export const signInteAuthUseWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

//SIGN OUT METHOD
export const signOutUser = () => signOut(auth);

//
export const onAuthStateChangedLister = (callback) =>
  onAuthStateChanged(auth, callback);
