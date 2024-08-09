import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider'
import PropTypes from 'prop-types';

const Hero = ({ title }) => {
  return (
    <>
      <div className="hero container flex flex-col-reverse">
        <div className="banner">
          <HeroSlider />
        </div>
        <div className="banner " style={{ color: 'darkblue',display:"flex", flexDirection:"column" }}>
          <h1 style={{ color: 'darkblue' }}>{title}</h1>
          <p style={{ color: 'darkgray' }}>
            Explore the world with us! Our travel agency offers a wide range of tours and accommodations tailored to your unique preferences. From adventure seekers to relaxation enthusiasts, we have something for everyone. Book your dream getaway today and let us take care of the rest.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0',gap:"1.2rem",flexWrap:"wrap" }}>
      <Link to="/tour" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Explore Tours</Link>
      <Link to="/rooms" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Book Rooms</Link>
      <Link to="/flights" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Book Flights</Link>
    </div>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Hero;
