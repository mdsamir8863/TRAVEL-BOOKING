import { toast } from 'react-toastify';
import '../styles/bookingForm.css';
import axios from 'axios';
import { useState } from 'react';

const BookingForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [check_in, setCheck_in] = useState("");
  const [check_out, setCheck_out] = useState("");
  const [number_of_guest, setNumber_of_guest] = useState(1);
  const [room_type, setRoom_type] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, email, phone, check_in, check_out, number_of_guest, room_type, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setCheck_in("");
          setCheck_out("");
          setNumber_of_guest(1);
          setRoom_type("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="booking-form-container">
      <img
        className="booking-header-image"
        src="https://e0.pxfuel.com/wallpapers/529/565/desktop-wallpaper-travel-mobile-global.jpg"
        alt="Hotel"
      />
      <form className="booking-form" onSubmit={handleMessage}>
        <h2>Booking Form</h2>
        <div className="form-row">
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter your first name" />
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter your last name" />
        </div>
        <div className="form-row">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Enter your phone number" />
        </div>
        <div className="form-row">
          <input value={check_in} onChange={(e) => setCheck_in(e.target.value)} type="date" placeholder="Select check-in date" />
          <input value={check_out} onChange={(e) => setCheck_out(e.target.value)} type="date" placeholder="Select check-out date" />
        </div>
        <div className="form-row">
          <input value={number_of_guest} onChange={(e) => setNumber_of_guest(e.target.value)} type="number" placeholder="Number of guests" />
          <select value={room_type} onChange={(e) => setRoom_type(e.target.value)}>
            <option value="">Select your preferred room type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div className="form-row amenities">
          <label>
            <input type="checkbox" />
            Free Wi-Fi
          </label>
          <label>
            <input type="checkbox" />
            Free Breakfast
          </label>
          <label>
            <input type="checkbox" />
            Gym Access
          </label>
          <label>
            <input type="checkbox" />
            Pool Access
          </label>
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter any special requests or comments"
        ></textarea>
        <div className="form-row terms">
          <label style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <input type="checkbox" />
            I agree to the terms and conditions.
          </label>
        </div>
        <button id='formBook' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
