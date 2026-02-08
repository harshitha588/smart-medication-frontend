import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        padding: "20px"
      }}
    >
      <h1 style={{ color: "green" }}>✅ Success</h1>
      <p>Your action was completed successfully.</p>

      <button
        onClick={() => navigate("/patient")}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "16px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default Result;
