// // import { auth } from "./firebase";
// // import { signOut } from "firebase/auth";
// // import { useNavigate } from "react-router-dom";

// // function Dashboard() {
// //   const navigate = useNavigate();
// //   const user = auth.currentUser;

// //   const logout = async () => {
// //     await signOut(auth);
// //     navigate("/signin");
// //   };

// //   return (
// //     <div className="dash">
// //       <h1>👋 Welcome</h1>

// //       <h2>{user?.email}</h2>

// //       <button onClick={logout}>Logout</button>
// //     </div>
// //   );
// // }

// // export default Dashboard;


// import { auth } from "./firebase";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const navigate = useNavigate();
//   const user = auth.currentUser;

//   const logout = async () => {
//     await signOut(auth);
//     navigate("/signin");
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1 style={styles.title}>👋 Welcome Back</h1>

//         <p style={styles.text}>
//           You are successfully logged in to your account.
//         </p>

//         <div style={styles.infoBox}>
//           <p><b>Email:</b> {user?.email}</p>
//           <p><b>Status:</b> Active 🟢</p>
//         </div>

//         <button style={styles.button} onClick={logout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#f4f6f8",
//   },
//   card: {
//     background: "white",
//     padding: "30px",
//     borderRadius: "12px",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//     textAlign: "center",
//     width: "350px",
//   },
//   title: {
//     marginBottom: "10px",
//   },
//   text: {
//     color: "#666",
//     marginBottom: "20px",
//   },
//   infoBox: {
//     background: "#f1f1f1",
//     padding: "15px",
//     borderRadius: "8px",
//     marginBottom: "20px",
//     textAlign: "left",
//   },
//   button: {
//     background: "#e74c3c",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
// };

// export default Dashboard;

import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const logout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>👋 Welcome Back</h1>

        <p style={styles.subtitle}>You're successfully logged in</p>

        <div style={styles.info}>
          <p><b>Email:</b> {user?.email}</p>
          <p><b>Status:</b> 🟢 Active</p>
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
    width: "280px",           // 👈 FIX: choti width
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