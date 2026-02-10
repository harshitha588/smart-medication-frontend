import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
import CaregiverDashboard from "./pages/CaregiverDashboard";
import ExpiryTracker from "./pages/ExpiryTracker";
import Reminders from "./pages/Reminders";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Flow */}
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/caregiver-dashboard" element={<CaregiverDashboard />} />

        {/* Features */}
        <Route path="/expiry" element={<ExpiryTracker />} />
        <Route path="/reminders" element={<Reminders />} />
      </Routes>
    </Router>
  );
}

export default App;
