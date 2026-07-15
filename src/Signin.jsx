import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "./firebase";

import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Google Provider
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();


  // Google Signin
  const handleGoogleSignin = async () => {

    try {

      console.log("Google button clicked");

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log(user);


      // Save Google user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid,
      });


      toast.success("Google Login Successful");

      navigate("/dashboard");


    } catch (err) {

      console.log(err.message);
      toast.error(err.message);

    }

  };



  // Email Password Signin
  const handleSignin = async () => {

    if (!email || !password) {

      toast.error("Email aur password fill karo");
      return;

    };


    try {

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );


      const user = userCredential.user;


      // Email verification check
      if (!user.emailVerified) {

        toast.error(
          "Please verify your email first. Check your inbox."
        );

        await signOut(auth);

        return;

      }


      toast.success("Signin successful");

      navigate("/dashboard");


    } catch (err) {

      toast.error(err.message);

    }

  };



  return (

    <div className="card">

      <h2>🔐 Sign In</h2>


      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />


      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />


      <button 
        className="login"
        onClick={handleSignin}
      >
        Sign In
      </button>



      <p className="auth-switch">

        Don't have an account? 
        <Link to="/signup"> Sign Up</Link>

      </p>



      <button onClick={handleGoogleSignin}>

        Continue with Google

      </button>


    </div>

  );

}


export default Signin;