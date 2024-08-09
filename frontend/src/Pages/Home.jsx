import { Link } from "react-router-dom";
import Biography from "../components/Biography";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";


const Home = () => {
  return (
    <>
      <Hero
        title={
          "Explore Your Dream Destinations with Us | Book Your Tour and Rooms Today!"
        }
        
      />
 <Biography url= "https://i.pinimg.com/736x/a7/3c/bf/a73cbfbcf18054bf31ee42e6453c5d94.jpg" url2="https://wallpapers.com/images/featured/island-r4b6jecqa149defi.jpg"  />
    
 <div className="container biography" style={{borderTop:"2px solid darkblue"}}>
        <div className="banner" style={{display: "flex", flexDirection: "column", order: 2,}}>
          <img style={{borderRadius:"20px",width:"100%"}} src="https://miro.medium.com/v2/resize:fit:1200/1*_VN3_61ibxzkTywSwLhnuw.jpeg" alt="our story image" />
          <img style={{borderRadius:"20px",width:"100%"}} src="https://ik.imagekit.io/tvlk/blog/2023/07/woman-flight-palen-beach-shutterstock_157948682.jpg?tr=dpr-2,w-675" alt="our story image" />
        </div>
        <div className="banner" style={{order: 1}}>
          <h3 style={{color:"darkblue"}}>My Services</h3>
          <p style={{color:"gray"}}>
            At TravelHub, we are dedicated to providing exceptional travel experiences to our customers. Our team of experienced professionals is committed to delivering personalized services that address the unique needs of each traveler. We believe in fostering a culture of innovation, excellence, and customer satisfaction in everything we do.
          </p>
          <p style={{fontWeight:"bold",fontSize:"1.5rem" , borderTop:"1px solid darkblue", width:"100%",marginTop:"1.2rem",paddingTop:"10px",color:"darkblue"}}>Tour Booking</p>
          <p style={{color:"gray"}}>
            Our vision is to be the leading travel service provider in the region, recognized for our commitment to quality, customer satisfaction, and community engagement. We strive to create unforgettable travel experiences by providing accessible, affordable, and high-quality services today.
          </p>
          <Link to="/tour" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Explore Now</Link>

          <p style={{fontWeight:"bold",fontSize:"1.5rem" , borderTop:"1px solid darkblue", width:"100%",marginTop:"1.2rem",paddingTop:"10px",color:"darkblue"}}>Rooms Booking</p>
          <p style={{color:"gray"}}>
            Our mission is to deliver comprehensive travel services that meet the evolving needs of our customers and the community. We aim to achieve this by investing in our people, embracing the latest technologies, and fostering partnerships that promote travel and exploration.
          </p>
          <Link to="/rooms" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Explore Now</Link>

          <p style={{fontWeight:"bold",fontSize:"1.5rem" , borderTop:"1px solid darkblue", width:"100%",marginTop:"1.2rem",paddingTop:"10px",color:"darkblue"}}>Flight Bookings</p>
          <p style={{color:"gray"}}>
            At TravelHub, we value innovation, integrity, respect, and excellence. We believe that these values are essential in guiding our actions and decisions, ensuring that we always put the needs of our customers first.
          </p>
          <Link to="/flights" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Explore Now</Link>

        </div>
      </div>
      <Testimonials/>
    </>
  );
};

export default Home;
