import '../styles/flight.css'
import { Link } from "react-router-dom";

const FlightBooking = () => {
  return (
<>
<header className="header" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230711/pngtree-easily-book-airline-tickets-online-via-smartphone-with-passport-and-search-image_3838759.jpg)', backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'Arial, sans-serif' }}>
        <div className="overColor" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '10px', textAlign: 'center', maxWidth: '800px', margin: '20px auto',height:"fit-content" }}>
          <h1 style={{ marginBottom: '10px', fontSize: '2rem', fontWeight: 'bold' }}>Flight Booking</h1>
          <p style={{ marginBottom: '20px', fontSize: '1.2rem', fontWeight: '400' }}>Welcome to our flight booking service. We are currently under development and will be launching soon. Stay tuned for more updates!</p>
          <p style={{ fontStyle: 'italic', color: 'yellow', fontSize: '1.1rem', fontWeight: '300' }}>Note: We are currently unable to process bookings. Please check back later.</p>
        </div>
      </header>

    <div className="flight-booking-container" style={{marginTop:"7rem", marginBottom:"2rem"}}>
      <h1>Book Your Flight</h1>
      <form className="flight-form">
        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <input type="text" id="origin" placeholder="Enter origin" required />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input type="text" id="destination" placeholder="Enter destination" required />
        </div>
        <div className="form-group">
          <label htmlFor="departure-date">Departure Date</label>
          <input type="date" id="departure-date" required />
        </div>
        <div className="form-group">
          <label htmlFor="return-date">Return Date</label>
          <input type="date" id="return-date" />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Number of Passengers</label>
          <select id="passengers" required>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" className="book-flight-btn">Book Flight</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link> to book faster.</p>
    </div>
</>
  )
}

export default FlightBooking