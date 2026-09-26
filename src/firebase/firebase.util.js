import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD7mO9aDu6HRQ1TPMA2KJDD4jdI2IEtpas",
  authDomain: "crwn-clothes-4cc33.firebaseapp.com",
  projectId: "crwn-clothes-4cc33",
  storageBucket: "crwn-clothes-4cc33.firebasestorage.app",
  messagingSenderId: "900888289944",
  appId: "1:900888289944:web:498c02d919cc2750fee6ed",
  measurementId: "G-FGZ5TM43Q9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider);

export default firebase;