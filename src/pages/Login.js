import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role; // patient or caregiver

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!role) {
      alert("Role missing. Please select role again.");
      navigate("/");
      return;
    }

    // TEMP frontend-only login
    if (role === "patient") {
      navigate("/patient-dashboard");
    } else if (role === "caregiver") {
      navigate("/caregiver-dashboard");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Login ({role})</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
      />

      <button
        onClick={handleLogin}
        style={{ padding: "10px 30px", marginTop: "20px" }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;

