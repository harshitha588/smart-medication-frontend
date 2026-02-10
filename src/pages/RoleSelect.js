import { useNavigate } from "react-router-dom";

function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2>Smart Medication</h2>
        <p>Select your role to continue</p>

        <button onClick={() => navigate("/login", { state: { role: "patient" } })}>
          Patient
        </button>

        <button
          className="secondary"
          onClick={() => navigate("/login", { state: { role: "caregiver" } })}
        >
          Caregiver
        </button>

        <p style={{ marginTop: "20px" }}>
          New user?{" "}
          <span className="link" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default RoleSelect;
