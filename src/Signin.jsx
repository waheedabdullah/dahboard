// import { useState } from "react";
// import { auth } from "./firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";

// function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSignin = async () => {
//     if (!email || !password) {
//       alert("Email aur password fill karo");
//       return;
//     }

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Signin successful");
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="card">
//       <h2>🔐 Sign In</h2>

//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         placeholder="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button className="login" onClick={handleSignin}>
//         Sign In
//       </button>

//       <p className="auth-switch">
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// }

// export default Signin;

// import { useState } from "react";
// import { auth } from "./firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSignin = async () => {
//     if (!email || !password) {
//       toast.error("Email aur password fill karo");
//       return;
//     }

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("Signin successful");
//       navigate("/dashboard");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="card">
//       <h2>🔐 Sign In</h2>

//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         placeholder="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button className="login" onClick={handleSignin}>
//         Sign In
//       </button>

//       <p className="auth-switch">
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// }

// export default Signin;

import { useState } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignin = async () => {
    if (!email || !password) {
      toast.error("Email aur password fill karo");
      return;
    }

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
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="login" onClick={handleSignin}>
        Sign In
      </button>

      <p className="auth-switch">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Signin;