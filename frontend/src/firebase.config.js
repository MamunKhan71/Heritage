// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUUwRFO0vH-ZkPWFvCVcMWvWLnC2cWFsA",
    authDomain: "bistroboss-ddefc.firebaseapp.com",
    projectId: "bistroboss-ddefc",
    storageBucket: "bistroboss-ddefc.appspot.com",
    messagingSenderId: "1018857687317",
    appId: "1:1018857687317:web:a491f1c6e4e1ee7cac811c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;