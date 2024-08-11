import "../styles/allDoctors.css";
import "../styles/popup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";

const AllDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { isAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          {
            withCredentials: true,
          }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response?.data?.message || "Error fetching data");
      }
    };
    fetchDoctors();
  }, []);

  const handleDetailsClick = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/user/doctor/${id}`,
        {
          withCredentials: true,
        }
      );
      // Assuming the API returns an array, you might need to extract the correct object
      const doctor = data.doctors.find((doc) => doc._id === id); // Adjust based on actual data structure
      setSelectedDoctor(doctor);
      console.log(doctor); // Log the selected doctor to debug
      setShowPopup(true);
    } catch (error) {
      toast.error("Failed to fetch Doctor details");
    }
  };
  

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedDoctor(null);
  };

  const handleBookNowClick = () => {
    if (!isAuthenticated) {
      toast.info("Please log in to Proceed");
    } else {
      navigate("/bookings"); // Redirect to bookings page if authenticated
    }
  };

  return (
    <>
      <header className="header"></header>

      <div className="container">
        <div className="doctor-cards">
          {doctors && doctors.length > 0 ? (
            doctors.map((doctor) => (
              <div className="doctor-card" key={doctor._id}>
                <img
                  style={{ width: "100%", height: "15rem" }}
                  src={doctor.docAvatar && doctor.docAvatar.url}
                  alt="Hotel Image"
                />
                <h5
                  style={{
                    padding: "10px 0",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {`${doctor.firstName} `}
                  <span style={{ fontSize: "1.3rem" }}>
                    ₹{doctor.price}/day
                  </span>{" "}
                </h5>
                <p
                  style={{
                    display: "flex",
                    fontSize: "1.5rem",
                    color: "#2d2d2d",
                    alignItems: "center",
                  }}
                >
                  <svg
                    style={{ width: "2rem" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  {doctor.lastName}
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#2d2d2d",
                    margin: "10px 0px 30px",
                  }}
                >
                  {doctor.content}
                </p>
                <div className="actions">
                  <button
                    className="btn"
                    style={{ backgroundColor: "black" }}
                    onClick={() => handleDetailsClick(doctor._id)}
                  >
                    Details
                  </button>
                  <button
                    className="btn"
                    style={{ backgroundColor: "black" }}
                    onClick={handleBookNowClick}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1>No Registered Hotel Found! 😒</h1>
          )}
        </div>
      </div>

      {showPopup && (
        <>
          <div className="popup-overlay show" onClick={handleClosePopup}></div>
          <div className="popup show">
            <button className="btn closeBtn" onClick={handleClosePopup}>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

            </button>
            <h2 style={{paddingBottom:"1rem"}}>Hotel Details</h2>
            {selectedDoctor ? (
  <div>
    <img
      style={{ width: "100%", height: "15rem", objectFit: "cover" }}
      src={selectedDoctor.docAvatar && selectedDoctor.docAvatar.url}
      alt="Hotel Image"
    />
    <h3 style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
      {selectedDoctor.firstName} 
      <span style={{ fontSize: "1.2rem", color: "gray", fontWeight: "normal" }}>
        Rating: {selectedDoctor.rating}
      </span>
    </h3>
    <p style={{ margin: "10px 0", lineHeight: "1.6" }}>
      {selectedDoctor.content}
    </p>

    <h3 style={{ fontSize: "1.2rem", color: "#2d2d2d", margin: "10px 0" }}>
      Price: ₹{selectedDoctor.price}/day
    </h3>
   

    <h4 style={{ margin: "20px 0", color: "#333" }}>Location:</h4>
    <p
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "1.2rem",
        color: "#2d2d2d",
        margin: "10px 0",
      }}
    >
      <svg
        style={{ width: "2rem", marginRight: "8px" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
       {selectedDoctor.lastName}
    </p>
    <h4 style={{ margin: "20px 0", color: "#333" }}>Amenities:</h4>
    <ul style={{ listStyleType: "square", paddingLeft: "20px", margin: "10px 0" }}>
      <li>24/7 Room Service</li>
      <li>Free Wi-Fi</li>
      <li>Swimming Pool</li>
      <li>Gym</li>
      <li>Spa and Wellness Center</li>
    </ul>

    <h4 style={{ margin: "20px 0", color: "#333" }}>Contact Details:</h4>
    <p>Email: {selectedDoctor.email}</p>
    <p>Phone: {selectedDoctor.phone}</p>

    <button
      className="btn buyNow"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
      }}
      onClick={handleBookNowClick}
    >
      Book Now
    </button>
  </div>
) : (
  <p>Loading...</p>
)}

          </div>
        </>
      )}
    </>
  );
};

export default AllDoctor;
