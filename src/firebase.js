// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aj-studies-649e3.firebaseapp.com",
  projectId: "aj-studies-649e3",
  storageBucket: "aj-studies-649e3.appspot.com",
  messagingSenderId: "386238442265",
  appId: "1:386238442265:web:aee0910c9ecdec57d37388"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);