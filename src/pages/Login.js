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
        <h2>{role} Login</h2>
        <p>Welcome back 👋</p>

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
      </div>
    </div>
  );
}

export default Login;
