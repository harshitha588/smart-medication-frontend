import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";
import PatientDashboard from "./pages/PatientDashboard";
import CaregiverDashboard from "./pages/CaregiverDashboard";
import ExpiryTracker from "./pages/ExpiryTracker";
import Reminders from "./pages/Reminders";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/caregiver" element={<CaregiverDashboard />} />
        <Route path="/expiry" element={<ExpiryTracker />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;



