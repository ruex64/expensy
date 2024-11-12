import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW3A94aWsbC63U24sPZL8TluwXWsh6Iws",
  authDomain: "expensy-ruex64.firebaseapp.com",
  projectId: "expensy-ruex64",
  storageBucket: "expensy-ruex64.firebasestorage.app",
  messagingSenderId: "1075751344378",
  appId: "1:1075751344378:web:10f5b965ef5eb9f77f5143",
  measurementId: "G-EGF912C000"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
