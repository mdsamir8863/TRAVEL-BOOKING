import  { useContext, useState, useRef, useEffect } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp, IoPersonAddOutline } from "react-icons/io5"; // Use IoPersonAddOutline for nurse icon
import { BsPeopleFill } from "react-icons/bs"; // New icon for patients
import { HiUserGroup } from "react-icons/hi"; // New icon for receptionists
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo3.png";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const sidebarRef = useRef(null);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function clearCookies() {
    const cookies = document.cookie.split(";");
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
  }

  const handleLogout = async () => {
    clearCookies()
    toast.success(res.data.message);
    setIsAuthenticated(false);
    
  };
  const logout = ()=>{
    navigateTo("/login");
    setShow(false);

  }

  const gotoHomePage = () => {
    navigateTo("/dashboard");
    setShow(false);
    
  };

  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
    setShow(false);
  };

  const gotoMessagesPage = () => {
    navigateTo("/appointments");
    setShow(false);
  };

  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/addnew");
    setShow(false);
  };

  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(false);
  };

  const gotoPatientsPage = () => {
    navigateTo("/patients");
    setShow(false);
  };

  // const gotoReceptionistsPage = () => {
  //   navigateTo("/receptionists");
  //   setShow(false);
  // };

  return (
    <>
      <nav ref={sidebarRef} className={show ? "show sidebar" : "sidebar"}>
        <div className="logo-container">
        <div className="logo" style={{fontWeight: "bold", fontSize:"1.5rem",  display:'flex', alignItems:"center", justifyContent:"center", width:"100%"}}>
          <Link to="/" className="logo-img" style={{textDecoration:"none"}}>
            Health<span style={{ color: "#ffce00" }}>Hub</span>
          </Link>
        </div>
        </div>
        <div className="links">
          <div onClick={gotoHomePage}>
            <TiHome />
            <span>Home</span>
          </div>
          <div onClick={gotoDoctorsPage}>
            <FaUserDoctor />
            <span>Hotels</span>
          </div>
          <div onClick={gotoAddNewAdmin}>
            <MdAddModerator />
            <span>Add New Admin</span>
          </div>
          <div onClick={gotoAddNewDoctor}>
            <IoPersonAddSharp />
            <span>Add New Rooms</span>
          </div>
          <div onClick={gotoPatientsPage}>
            <BsPeopleFill />
            <span>Travelers</span>
          </div>
          {/* <div onClick={gotoReceptionistsPage}>
            <HiUserGroup />
            <span>Receptionists</span>
          </div> */}
          <div onClick={gotoMessagesPage}>
            <AiFillMessage />
            <span>Bookings</span>
          </div>
          <div onClick={handleLogout}>
            <RiLogoutBoxFill />
            <span onClick={logout}>Logout</span>
          </div>
        </div>
      </nav>
      <div id="menuIcon"
        className="wrapper"
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      >
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => setShow(!show)}
        />
      </div>
    </>
  );
};

export default Sidebar;
