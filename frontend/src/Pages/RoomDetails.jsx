// RoomDetails.jsx
import React from 'react';
import './RoomDetails.css';

const RoomDetails = () => {
  return (
    <div className="room-details-container">
      <div className="room-image">
        <img src="https://cdn.dribbble.com/userupload/8391075/file/original-81c3d4decff4cb83638a3284aeac1899.png?resize=400x300&vertical=center" alt="Room Image" />
      </div>
      <div className="room-info">
        <h2>Suite 45 m<sup>2</sup></h2>
        <p>
          It includes 1 queen size bed, private kitchen, bathroom, and some living spaces.
        </p>
        <ul className="room-features">
          <li>Offers light breakfast, coffee or tea, and rolls with jam.</li>
          <li>Sea View</li>
          <li>Sunlight in the mornings</li>
        </ul>
        <h3>Room Amenities</h3>
        <ul className="room-amenities">
          <li>Shower</li>
          <li>Safe</li>
          <li>Luggage</li>
          <li>Concierge</li>
          <li>24/7 service</li>
        </ul>
        <h3>Bed Type</h3>
        <p>Queen Size Bed Comfy, fit for 2 people, able to spread out</p>
        <h3>Cancellation Rules</h3>
        <p>Free cancellation until 22 July</p>
        <p>According to time at destination</p>
        <p>Until 22 July 23:59: <strong>100% Free</strong></p>
        <p>After 26 July 23:59: <strong>No Refund</strong></p>
        <div className="booking-options">
          <p>Booking.com: <strong>USD 964</strong> for 3 nights</p>
          <p>HotelStore: <strong>USD 872</strong> for 3 nights</p>
          <button>Choose</button>
          <p>Save Total: <strong>USD 92</strong></p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
