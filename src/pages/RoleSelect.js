import { useNavigate } from "react-router-dom";

function RoleSelect() {
  const navigate = useNavigate();

  const cardStyle = {
    width: "260px",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    cursor: "pointer",
    marginBottom: "20px"
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Select Your Role</h1>
      <p>Choose how you want to use the application</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px"
        }}
      >
        <div
          style={cardStyle}
          onClick={() => navigate("/patient")}
        >
          <h2>👤 Patient</h2>
          <p>Manage medicines & reminders</p>
        </div>

        <div
          style={cardStyle}
          onClick={() => navigate("/caregiver")}
        >
          <h2>👨‍⚕️ Caregiver</h2>
          <p>Monitor patient medicines</p>
        </div>
      </div>
    </div>
  );
}

export default RoleSelect;

