import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import Signin from "./Signin";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 user check (login hai ya nahi)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <BrowserRouter>
      <Routes>

        {/* Default route */}
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />
          }
        />

        {/* Auth routes */}
        <Route
          path="/signin"
          element={user ? <Navigate to="/dashboard" /> : <Signin />}
        />

        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" /> : <Signup />}
        />

        {/* Protected route */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/signin" />}
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;