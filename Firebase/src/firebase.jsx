// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz7wtMu0lNJJeLF3cmBhI5rtHuRTHeovE",
    authDomain: "fir-20ae2.firebaseapp.com", // Bu değer doğru olmalı
    projectId: "fir-20ae2",
    storageBucket: "fir-20ae2.appspot.com",
    messagingSenderId: "760480608261",
    appId: "1:760480608261:web:df25f429054e15b886ac6c"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);