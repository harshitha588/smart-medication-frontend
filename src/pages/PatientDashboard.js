import { useNavigate } from "react-router-dom";

function PatientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2>Patient Dashboard</h2>
        <p>Manage your medicines</p>

        <button onClick={() => navigate("/expiry")}>
          Upload Medicine Photo
        </button>

        <button className="secondary" onClick={() => navigate("/reminders")}>
          View Reminders
        </button>

        <button className="gray">Profile</button>
      </div>
    </div>
  );
}

export default PatientDashboard;
