import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoleSelect from "./pages/RoleSelect";
import PatientDashboard from "./pages/PatientDashboard";
import CaregiverDashboard from "./pages/CaregiverDashboard";
import Reminders from "./pages/Reminders";
import Result from "./pages/Result";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import ExpiryTracker from "./pages/ExpiryTracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/role" element={<RoleSelect />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/caregiver" element={<CaregiverDashboard />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/result" element={<Result />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
        <Route path="/expiry" element={<ExpiryTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


