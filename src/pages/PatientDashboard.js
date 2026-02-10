import { useNavigate } from "react-router-dom";

function PatientDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>👤 Patient Dashboard</h2>

      <button onClick={() => navigate("/expiry")} style={btnStyle}>
        📸 Upload Medicine Photo
      </button>

      <button onClick={() => navigate("/reminders")} style={btnStyle}>
        📝 Upload Prescription
      </button>

      <button onClick={() => navigate("/history")} style={btnStyle}>
        📊 View History
      </button>

      <button onClick={() => navigate("/profile")} style={btnStyle}>
        👤 Profile
      </button>
    </div>
  );
}

const btnStyle = {
  display: "block",
  margin: "15px auto",
  padding: "12px 20px",
  fontSize: "16px",
};

export default PatientDashboard;

