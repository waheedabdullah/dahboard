import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCC2yQ4jtaY9hcWJ3AFOKLHo7gOvG7ac8",
    authDomain: "react-firebase-projects-f2afd.firebaseapp.com",
    projectId: "react-firebase-projects-f2afd",
    storageBucket: "react-firebase-projects-f2afd.appspot.com",
    messagingSenderId: "265151280872",
    appId: "1:265151280872:web:a993429cb285e710463b5d",
    measurementId: "G-K3ZQMF9DG1"
  };
const app = initializeApp(firebaseConfig);

console.log("Firebase App:", app);
export const auth = getAuth(app);