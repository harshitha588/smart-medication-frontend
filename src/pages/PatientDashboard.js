import { useNavigate } from "react-router-dom";

function PatientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2>📊 Patient Dashboard</h2>

        <div className="dashboard-grid">
          <div
            className="dashboard-item"
            onClick={() => navigate("/expiry")}
          >
            📸 Upload Medicine
          </div>

          <div
            className="dashboard-item"
            onClick={() => navigate("/reminders")}
          >
            ⏰ View Reminders
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
