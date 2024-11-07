import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwKPBgtXr9DLd0fBp2KDG8ZUF3GMxWW9s",
  authDomain: "training-courses-c41c8.firebaseapp.com",
  projectId: "training-courses-c41c8",
  storageBucket: "training-courses-c41c8.firebasestorage.app",
  messagingSenderId: "1099504786425",
  appId: "1:1099504786425:web:add40d7b44a0a87e5c3b28"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});

export { auth };