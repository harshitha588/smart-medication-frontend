import { useNavigate } from "react-router-dom";

function PatientDashboard() {
  const navigate = useNavigate();

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px"
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Patient Dashboard</h1>

      <div style={cardStyle}>
        <h3>💊 Today’s Medicines</h3>
        <ul>
          <li>Paracetamol – 8:00 AM</li>
          <li>Vitamin D – 1:00 PM</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <h3>⏰ Upcoming Reminders</h3>
        <ul>
          <li>Insulin – 6:00 PM</li>
          <li>BP Tablet – 9:00 PM</li>
        </ul>
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={() => navigate("/reminders")}>⏰ Reminders</button>
        <button onClick={() => navigate("/expiry")}>🧪 Expiry Tracker</button>
        <button onClick={() => navigate("/history")}>📊 History</button>
        <button onClick={() => navigate("/profile")}>👤 Profile</button>
        <button onClick={() => navigate("/help")}>❓ Help</button>
      </div>
    </div>
  );
}

export default PatientDashboard;
