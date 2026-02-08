import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Smart Medication & Expiry Tracker</h1>
      <p>Track medicines, expiry dates, and reminders easily</p>

      <Link to="/login">
        <button style={{ marginRight: "10px" }}>Login</button>
      </Link>

      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Home;

