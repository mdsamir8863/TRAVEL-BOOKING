import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import MessageForm from "./components/MessageForm";
import TourPackages from "./components/TourPackages";
import RoomBooking from "./components/RoomBooking";
import FlightBooking from "./components/FlightBooking";
import BookingForm from "./components/BookingForm";
import RoomDetails from "./Pages/RoomDetails";
import wIcon from './assets/WhatsApp_icon.png';
import ProtectedRoute from "./components/ProtectedRoutes";

const App = () => {

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } catch (error) {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
      }
    };

    if (document.cookie) {
      fetchUser();
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/details" element={<RoomDetails />} />
          <Route path="/contact" element={<MessageForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rooms" element={<RoomBooking />} />
          <Route path="/tour" element={<TourPackages />} />
          <Route path="/flights" element={<FlightBooking />} />
          <Route path="/flights" element={<ProtectedRoute element={BookingForm} />} />
          <Route path="/bookings" element={<ProtectedRoute element={BookingForm} />} />
          <Route path="/message" element={<MessageForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
        <a
          href={`https://wa.me/+917483982440`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link w-inline-block fixed bottom-10 right-1"
          style={{ position: "fixed", right: "15px", bottom: "15px", borderRadius: "50%" }}
        >
          <img style={{ height: "4rem" }} src={wIcon} alt="" />
        </a>
      </Router>
    </>
  );
};

export default App;
