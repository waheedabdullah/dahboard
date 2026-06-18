// // import { useState } from "react";
// // import { auth } from "./firebase";
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { Link, useNavigate } from "react-router-dom";

// // function Signup() {
// //   const [name, setName] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const navigate = useNavigate();

// //   const handleSignup = async () => {
// //     if (!name || !phone || !email || !password) {
// //       alert("Sab fields fill karo");
// //       return;
// //     }

// //     if (password.length < 6) {
// //       alert("Password kam az kam 6 characters ka ho");
// //       return;
// //     }

// //     try {
// //       await createUserWithEmailAndPassword(auth, email, password);
// //       alert("Signup successful");

// //       navigate("/signin");
// //     } catch (err) {
// //       alert(err.message);
// //     }
// //   };

// //   return (
// //     <div className="card">
// //       <h2>📝 Sign Up</h2>

// //       <input
// //         placeholder="Full Name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />

// //       <input
// //         placeholder="Phone Number"
// //         value={phone}
// //         onChange={(e) => setPhone(e.target.value)}
// //       />

// //       <input
// //         placeholder="Email"
// //         type="email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />

// //       <input
// //         placeholder="Password"
// //         type="password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />

// //       <button className="signup" onClick={handleSignup}>
// //         Sign Up
// //       </button>

// //       <p className="auth-switch">
// //         Already have an account? <Link to="/signin">Sign In</Link>
// //       </p>
// //     </div>
// //   );
// // }

// // export default Signup;

// import { useState } from "react";
// import { auth } from "./firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function Signup() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     if (!name || !phone || !email || !password) {
//       toast.error("Sab fields fill karo");
//       return;
//     }

//     if (password.length < 6) {
//       toast.error("Password kam az kam 6 characters ka ho");
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       toast.success("Signup successful");

//       navigate("/signin");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="card">
//       <h2>📝 Sign Up</h2>

//       <input
//         placeholder="Full Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         placeholder="Phone Number"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       <input
//         placeholder="Email"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         placeholder="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button className="signup" onClick={handleSignup}>
//         Sign Up
//       </button>

//       <p className="auth-switch">
//         Already have an account? <Link to="/signin">Sign In</Link>
//       </p>
//     </div>
//   );
// }

// export default Signup;0

import { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!name || !phone || !email || !password) {
      toast.error("Sab fields fill karo");
      return;
    }

    if (password.length < 6) {
      toast.error("Password kam az kam 6 characters ka ho");
      return;
    }

    try {
      // User create karo
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Verification email send karo
      await sendEmailVerification(userCredential.user);

      toast.success(
        "Account created! Verification email sent. Please check your inbox."
      );

      navigate("/signin");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="card">
      <h2>📝 Sign Up</h2>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="signup" onClick={handleSignup}>
        Sign Up
      </button>

      <p className="auth-switch">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
}

export default Signup;