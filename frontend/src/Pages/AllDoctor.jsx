import "../styles/allDoctors.css"
import wIcon from '../assets/WhatsApp_icon.png'
import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const {
          data,
        } = await axios.get("http://localhost:4000/api/v1/user/doctors", {
          withCredentials: true,
        });
        setDoctors(data.doctors); // Fixed by uncommenting this line to update the state with fetched doctors
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);
  return (
    <>
      <header className="header">
        {/* <div className="overColor">
          <h1>Meet Our Travel Experts</h1>
          <p>Get to know our team of experienced travel experts dedicated to making your travel dreams come true.</p>
        </div> */}
      </header>

      <div className="container">
      <div className="doctor-cards">
      {doctors && doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div className="doctor-card" key={doctor._id}>
          <img style={{borderRadius:"50%", width:"15rem", height:"15rem"}} src={doctor.docAvatar && doctor.docAvatar.url} alt="Doctor Avatar" />
          <h5 style={{padding:"10px 0"}}>{`${doctor.firstName} ${doctor.lastName}`}</h5>
          <p>{doctor.specialization}</p>
          <div className="actions" style={{margin:"auto",display:"flex", width:"100%",justifyContent:"center"}}>
            {/* <Link to='/message'>Message</Link> */}
            <Link to="/bookings" className="social-link w-inline-block fixed bottom-10 right-1" style={{ backgroundColor:"black" }}>
            Book Now
            </Link>
           
            
          </div>
        </div>
          ))
        ) : (
          <h1>No Registered Travel Experts Found!</h1>
        )}
      </div>
    </div>
      
    </>
  )
}

export default AllDoctor