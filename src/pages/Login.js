import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";

function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");

  const navigate = useNavigate();

  const sendOtp = () => {
    if (!email) {
      setType("error");
      setMessage("Please enter email");
      return;
    }
    setType("success");
    setMessage("OTP sent to your email (demo)");
    setShowOtp(true);
  };

  const verifyOtp = () => {
    if (!otp) {
      setType("error");
      setMessage("Please enter OTP");
      return;
    }
    setType("success");
    setMessage("Login successful");
    navigate("/result");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Smart Medication & Expiry Tracker</h1>

      <div
        style={{
          width: "350px",
          margin: "30px auto",
          padding: "25px",
          border: "1px solid #ccc",
          borderRadius: "6px"
        }}
      >
        <h2>Login</h2>

        <Message type={type} text={message} />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        {showOtp && (
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
        )}

        {!showOtp ? (
          <button onClick={sendOtp} style={{ width: "100%", padding: "10px" }}>
            Send OTP
          </button>
        ) : (
          <button onClick={verifyOtp} style={{ width: "100%", padding: "10px" }}>
            Verify OTP
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
