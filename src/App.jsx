import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default route → Signin */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Authentication pages */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected page (simple version) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/signin" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;