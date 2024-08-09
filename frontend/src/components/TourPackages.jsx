import { useNavigate } from 'react-router-dom';
import '../styles/TourPackages.css';

const TourPackages = () => {
    const navigate = useNavigate();
    const goToTop = () => {
        window.scrollTo({
          top: 700,
          behavior: 'smooth'  // Smooth scroll behavior
        });
      };
  return (
    <>
<header className="header" style={{ backgroundImage: 'url(https://tour-pnqj.onrender.com/images/img_bg_3.jpg)', backgroundSize: 'cover' }}>
  <div className="overColor" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '10px', textAlign: 'center', maxWidth: '800px', margin: '0px auto', height: 'fit-content' }}>
    <h1>Explore the World with Us</h1>
    <p>Discover breathtaking destinations and immerse yourself in unique cultures with our expertly curated tours. Whether you're seeking adventure, relaxation, or a mix of both, our personalized itineraries are designed to make your travel dreams come true.</p>
  </div>
</header>

    <div className="tour-packages-container" style={{marginTop:"7rem"}}>
      <h1 style={{color:"darkblue"}}>Explore Our Tour Packages</h1>
      <div className="package-cards">
        <div className="package-card">
          <img src="https://static.wanderon.in/wp-content/uploads/2024/05/relaxing-beach-destinations.jpg" alt="Tour Package 1" />
          <h2>Beach Getaway</h2>
          <p>Escape to a tropical paradise with our Beach Getaway package.</p>
          <button onClick={()=>{navigate('/bookings')}}>Book Now</button>
        </div>
        <div className="package-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3igLnW4CSFMRze8QvXroNtsLBTKWnm77s3g&s" alt="Tour Package 2" />
          <h2>Mountain Adventure</h2>
          <p>Embark on a thrilling journey to the mountains with our Mountain Adventure package.</p>
          <button onClick={()=>{navigate('/bookings')}}>Book Now</button>
        </div>
        <div className="package-card">
          <img src="https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2022/01/DEST_DENMARK_COPENHAGEN_NYHAVN_THEME_PEOPLE_TOURIST_TAKING_PHOTO_GettyImages-1058837752.jpg" alt="Tour Package 3" />
          <h2>City Break</h2>
          <p>Discover the vibrant culture and nightlife of the city with our City Break package.</p>
          <button onClick={()=>{navigate('/bookings')}}>Book Now</button>
        </div>
        <div className="package-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLz9jcKcwnXGNuCYgIRse8BP5aIOYbMw8IEw&s" alt="Tour Package 4" />
          <h2>Wildlife Safari</h2>
          <p>Get up close and personal with nature on our Wildlife Safari package.</p>
          <button onClick={()=>{navigate('/bookings')}}>Book Now</button>
        </div>
      </div>
      <div className="package-details" style={{backgroundColor: '#f8f9fa', padding: '2rem',marginTop:"2rem", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <h2 style={{color: '#007bff'}}>Package Details</h2>
        <p style={{marginBottom: '1rem'}}>Our tour packages are carefully curated to provide you with an unforgettable experience. From relaxing getaways to action-packed adventures, we have something for everyone.</p>
        <p style={{marginBottom: '1rem'}}>Each package includes:</p>
        <ul style={{listStyleType: 'none', padding: '0', margin: '0'}}>
          <li style={{marginBottom: '10px'}}>Accommodation in a luxurious hotel</li>
          <li style={{marginBottom: '10px'}}>Guided tours and activities</li>
          <li style={{marginBottom: '10px'}}>Delicious meals and drinks</li>
          <li style={{marginBottom: '10px'}}>Round-trip transportation</li>
        </ul>
        <button onClick={goToTop}  style={{backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer', transition: 'background-color 0.3s ease'}}>Choose Your Plan</button>
      </div>
    </div>
    </>

  );
};

export default TourPackages;
