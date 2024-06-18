// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5OOzcYVPpM8iEjanWkaIxbNgCvP53Qto",
    authDomain: "netflix-25b6e.firebaseapp.com",
    projectId: "netflix-25b6e",
    storageBucket: "netflix-25b6e.appspot.com",
    messagingSenderId: "93856597582",
    appId: "1:93856597582:web:770c38ad14c0727196e51f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth }