import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYbxte7Wtxars_6SDVwC7t2PCy1eZHbnw",
    authDomain: "auth-app-8833b.firebaseapp.com",
    projectId: "auth-app-8833b",
    storageBucket: "auth-app-8833b.appspot.com",
    messagingSenderId: "552701339053",
    appId: "1:552701339053:web:27439bd71e72c87d322d24",
    measurementId: "G-YNHB0F70NY"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
 }