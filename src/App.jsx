import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserFeedback from "./components/UserFeedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* USER DASHBOARD */}
        <Route path="/" element={<UserFeedback />} />

        {/* ADMIN DASHBOARD */}
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
