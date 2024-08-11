import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import Messages from "./components/Messages";
import Hotels from "./components/Doctors";
import Travelers from "./components/Patients";
// import Receptionists from "./components/Receptionists";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import AddNewAdmin from "./components/AddNewAdmin";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("Admin")));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/hotel/addnew" element={<AddNewDoctor />} />
        <Route path="/admin/addnew" element={<AddNewAdmin />} />
        <Route path="/bookings" element={<Messages />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/Travelers" element={<Travelers />} />
        {/* <Route path="/receptionists" element={<Receptionists />} /> */}
      </Routes>
      {user?._id && window.location.pathname !== "/login" ? <Sidebar /> : null}
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
