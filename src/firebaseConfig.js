// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGuOKA8wSzgeMCUIa2YZFi_yRXBhJjWL4",
  authDomain: "netflix-clone-13c6d.firebaseapp.com",
  projectId: "netflix-clone-13c6d",
  storageBucket: "netflix-clone-13c6d.appspot.com",
  messagingSenderId: "973848336139",
  appId: "1:973848336139:web:2baffd09723ffbe9beb40e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
