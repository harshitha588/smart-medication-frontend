import { useNavigate } from "react-router-dom";

function CaregiverDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🧑‍⚕️ Caregiver Dashboard</h2>

      <p>Today's Medicines</p>
      <ul style={{ listStyle: "none" }}>
        <li>💊 Paracetamol – 8:00 AM</li>
        <li>💊 BP Tablet – 9:00 PM</li>
      </ul>

      <button onClick={() => navigate("/history")} style={btnStyle}>
        📊 History
      </button>

      <button onClick={() => navigate("/help")} style={btnStyle}>
        ❓ Help
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

export default CaregiverDashboard;

