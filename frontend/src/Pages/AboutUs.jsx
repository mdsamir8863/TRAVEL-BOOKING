import { Link } from "react-router-dom";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <header className="header" style={{ backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/529/565/desktop-wallpaper-travel-mobile-global.jpg)', backgroundSize: 'cover' }}>
        <div className="overColor" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '10px', textAlign: 'center', maxWidth: '800px', margin: '0px auto',height:"fit-content" }}>
          <h1>About Us</h1>
          <p>Welcome to our travel agency, where we specialize in crafting unforgettable journeys for you. Explore the world with us and experience the best of travel, accommodation, and exploration.</p>
        </div>
      </header>
      <Biography
         url2="https://st.depositphotos.com/1017986/5054/i/450/depositphotos_50547177-stock-photo-group-of-smiling-friends-traveling.jpg"
        url="https://somosalameda.org/wp-content/uploads/2021/04/all-india-tour-packages.jpg"
      />
      {/* <section className="services" style={{ backgroundColor: '#f9f9f9', padding: '20px', margin: 'auto', maxWidth: '800px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Services</h2>
        <div className="service" style={{ margin: '20px 0' }}>
          <h3 style={{ marginBottom: '10px' }}>Room Booking</h3>
          <p style={{ margin: '0' }}>Find your perfect stay with our wide range of accommodations tailored to your needs. From budget-friendly options to luxurious resorts, we&apos;ve got you covered.</p>
        </div>
        <div className="service" style={{ margin: '20px 0' }}>
          <h3 style={{ marginBottom: '10px' }}>Tour Booking</h3>
          <p style={{ margin: '0' }}>Embark on an adventure of a lifetime with our curated tour packages. Explore new destinations, immerse in local cultures, and create unforgettable memories.</p>
        </div>
        <div className="service" style={{ margin: '20px 0' }}>
          <h3 style={{ marginBottom: '10px' }}>Flight Booking</h3>
          <p style={{ margin: '0' }}>Book your flights with us and enjoy competitive rates, convenient schedules, and a hassle-free booking process. Let us take care of your travel arrangements.</p>
        </div>
      </section> */}

    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0',gap:"1.2rem",flexWrap:"wrap" }}>
      <Link to="/tour" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Explore Tours</Link>
      <Link to="/rooms" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Book Rooms</Link>
      <Link to="/flights" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Book Flights</Link>
    </div>

      
    </>
  );
};

export default AboutUs;
