// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsyJHjTmfIu89glpf_2mE-neSxYHg7XYc",
  authDomain: "react-disney-plus-app-aac71.firebaseapp.com",
  projectId: "react-disney-plus-app-aac71",
  storageBucket: "react-disney-plus-app-aac71.appspot.com",
  messagingSenderId: "300279460583",
  appId: "1:300279460583:web:a52aa2eadc76eaac79a842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
