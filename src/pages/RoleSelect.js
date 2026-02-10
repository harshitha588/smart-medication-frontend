import { useNavigate } from "react-router-dom";

function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Select Your Role</h2>
      <p>Choose how you want to use the application</p>

      <div style={{ marginTop: "40px" }}>
        <button
          style={{ padding: "15px 30px", margin: "20px" }}
          onClick={() => navigate("/login", { state: { role: "patient" } })}
        >
          Patient
        </button>

        <button
          style={{ padding: "15px 30px", margin: "20px" }}
          onClick={() => navigate("/login", { state: { role: "caregiver" } })}
        >
          Caregiver
        </button>
      </div>

      <p style={{ marginTop: "30px" }}>
        New user?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Register here
        </span>
      </p>
    </div>
  );
}

export default RoleSelect;

