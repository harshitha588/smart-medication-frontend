import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h1>💊 MediTrack AI</h1>
        <p>Scan. Track. Stay Healthy.</p>

        <button onClick={() => navigate("/login")}>
          Login
        </button>

        <button className="secondary" onClick={() => navigate("/register")}>
          Register
        </button>

        <button onClick={() => navigate("/help")}>
          Help
        </button>
      </div>
    </div>
  );
}

export default Home;