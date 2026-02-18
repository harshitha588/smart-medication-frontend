import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!role) {
      navigate("/");
      return;
    }

    role === "patient"
      ? navigate("/patient-dashboard")
      : navigate("/caregiver-dashboard");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>🔐 {role} Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        {/* NEW REGISTER LINK */}
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          New user?{" "}
          <span
            style={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
