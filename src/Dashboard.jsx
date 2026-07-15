


import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      console.log("Current user:", user);

      if (user) {
        const userRef = doc(db, "users", user.uid);

        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserData(userSnap.data());
          console.log(userSnap.data());
        } else {
          console.log("User data nahi mila");
        }
      }
    };

    fetchUserData();
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>👋 Welcome Back</h1>

        <p style={styles.subtitle}>
          You're successfully logged in
        </p>

        {userData?.photo && (
  <img
  src={userData.photo.replace("s96-c", "s200-c")}
  // src="https://lh3.googleusercontent.com/a/ACg8ocJhB_2f6uTweDj-DVNByOlk8sNn025vgbheyMZK0JJH1LPdwX8cqg=s200-c"
  // referrerPolicy="no-referrer"
  alt="profile"
    style={{
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      marginBottom: "15px",
    }}
  />
)}
        <div style={styles.info}>
          <p>
            <b>Email:</b> {userData?.email}
          </p>

          <p>
            <b>Name:</b> {userData?.name}
          </p>

          <p>
            <b>Phone:</b> {userData?.phone}
          </p>

          <p>
            <b>Status:</b> 🟢 Active
          </p>
        </div>

        <button style={styles.button} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f2f4f7",
  },

  card: {
    width: "280px",
    background: "#fff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    textAlign: "center",
  },

  title: {
    fontSize: "20px",
    marginBottom: "6px",
  },

  subtitle: {
    fontSize: "13px",
    color: "#666",
    marginBottom: "15px",
  },

  info: {
    background: "#f6f6f6",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "13px",
    textAlign: "left",
    marginBottom: "15px",
  },

  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#e74c3c",
    color: "white",
    cursor: "pointer",
  },
};

export default Dashboard;