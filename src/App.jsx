import { Routes, Route } from "react-router-dom";
// import ReviewForm from "./components/ReviewForm";
import Dashboard from "./components/Dashboard";
import UserFeedback from "./components/UserFeedback";

function App() {
  return (
    <Routes>
      {/* USER DASHBOARD */}
      <Route path="/" element={<UserFeedback />} />

      {/* ADMIN DASHBOARD */}
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
