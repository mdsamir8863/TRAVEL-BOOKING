import { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import wIcon from './assets/WhatsApp_icon.png'
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
// import AllDoctor from "./Pages/AllDoctor";
import MessageForm from "./components/MessageForm";
import TourPackages from "./components/TourPackages";
import RoomBooking from "./components/RoomBooking";
import FlightBooking from "./components/FlightBooking";
import BookingForm from "./components/BookingForm";
const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

    function getAllCookies() {
      let cookies = document.cookie.split('; ');
      let cookieObject = {};
      cookies.forEach(cookie => {
          let [name, value] = cookie.split('=');
          cookieObject[name] = decodeURIComponent(value);
      });
      return cookieObject;
  }
  

  useEffect(() => {
    console.log(getAllCookies());
    if(document.cookie){
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/api/v1/user/patient/me",
            {
              withCredentials: true,
            }
          );
          setIsAuthenticated(true);
          setUser(response.data.user);
        } catch (error) {
          setIsAuthenticated(false);
          setUser({});
        }
      };
      fetchUser();
    }
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/bookings" element={<MessageForm />} /> */}
          <Route path="/contact" element={<MessageForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rooms" element={<RoomBooking />} />
          <Route path="/tour" element={<TourPackages />} />
          <Route path="/flights" element={<FlightBooking />} />
          <Route path="/bookings" element={<BookingForm />} />
          <Route path="/message" element={<MessageForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
        <a href={`https://wa.me/+917483982440`} target="_blank" rel="noopener noreferrer" className="social-link w-inline-block fixed bottom-10 right-1" style={{position:"fixed", right:"15px", bottom:"15px", borderRadius:"50%"}}>
              <img style={{height:"4rem"}} src={wIcon} alt="" />
            </a>
      </Router>
    </>
  );
};

export default App;
