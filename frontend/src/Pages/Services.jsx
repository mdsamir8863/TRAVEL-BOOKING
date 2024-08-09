import '../styles/services.css'
import TourPackages from '../components/TourPackages';
import RoomBooking from '../components/RoomBooking';
import FlightBooking from '../components/FlightBooking';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const Services = () => {
  return (
    <>
      <header className="header" style={{backgroundImage: "url('https://media.cntraveller.com/photos/659441fe42e49867c5dca0df/16:9/w_2560%2Cc_limit/Most_relaxing_cityscapes_2024_Grid_January24_Getty_Global.jpg')"}}>
        <div className="overColor" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '10px', textAlign: 'center', maxWidth: '800px', margin: '20px auto',height:"fit-content" }}>
          <h1 style={{marginBottom: "20px"}}>Travel Services</h1>
          <p style={{marginBottom: "20px",textAlign:"center"}}>Explore our comprehensive range of travel services tailored to meet your travel needs. From booking flights and hotels to planning your itinerary, we&apos;ve got you covered.</p>
          <p style={{marginBottom: "20px",textAlign:"center"}}>Whether you&apos;re looking for a relaxing getaway or an action-packed adventure, our team of travel experts will work with you to create a personalized travel experience that exceeds your expectations.</p>
        </div>
      </header>
      <div className="container biography" >
        <div className="banner" style={{display: "flex", flexDirection: "column", order: 2}}>
          <img style={{borderRadius:"20px",width:"100%"}} src="https://miro.medium.com/v2/resize:fit:1200/1*_VN3_61ibxzkTywSwLhnuw.jpeg" alt="our story image" />
          <img style={{borderRadius:"20px",width:"100%"}} src="https://ik.imagekit.io/tvlk/blog/2023/07/woman-flight-palen-beach-shutterstock_157948682.jpg?tr=dpr-2,w-675" alt="our story image" />
        </div>
        <div className="banner" style={{order: 1}}>
          <h3>My Services</h3>
          <p style={{color:"gray"}}>
            At TravelHub, we are dedicated to providing exceptional travel experiences to our customers. Our team of experienced professionals is committed to delivering personalized services that address the unique needs of each traveler. We believe in fostering a culture of innovation, excellence, and customer satisfaction in everything we do.
          </p>
          <p style={{fontWeight:"bold",fontSize:"2rem"}}>Tour Booking</p>
          <p style={{color:"gray"}}>
            Our vision is to be the leading travel service provider in the region, recognized for our commitment to quality, customer satisfaction, and community engagement. We strive to create unforgettable travel experiences by providing accessible, affordable, and high-quality services today.
          </p>
          <Link to="/tour" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Explore Now</Link>

          <p style={{fontWeight:"bold",fontSize:"2rem"}}>Rooms Booking</p>
          <p style={{color:"gray"}}>
            Our mission is to deliver comprehensive travel services that meet the evolving needs of our customers and the community. We aim to achieve this by investing in our people, embracing the latest technologies, and fostering partnerships that promote travel and exploration.
          </p>
          <Link to="/rooms" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Explore Now</Link>

          <p style={{fontWeight:"bold",fontSize:"2rem"}}>Flight Bookings</p>
          <p style={{color:"gray"}}>
            At TravelHub, we value innovation, integrity, respect, and excellence. We believe that these values are essential in guiding our actions and decisions, ensuring that we always put the needs of our customers first.
          </p>
          <Link to="/flights" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Explore Now</Link>

        </div>
      </div>
  <Testimonials/>
    </>
  )
}

export default Services