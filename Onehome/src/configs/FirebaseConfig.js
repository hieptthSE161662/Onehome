import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  signInWithPopup, 
  signOut 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFPEaHAJT_EzbdUdA-PRlnjPdfK-qYSuw",
  authDomain: "onehome-aa481.firebaseapp.com",
  projectId: "onehome-aa481",
  storageBucket: "onehome-aa481.firebasestorage.app",
  messagingSenderId: "949573893954",
  appId: "1:949573893954:web:7b3692a079d588ff8492db",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup, signOut };
