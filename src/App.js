import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
import CaregiverDashboard from "./pages/CaregiverDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* dashboards */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/caregiver-dashboard" element={<CaregiverDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;


