import "../styles/popup.css";

const Popup = ({ hotel, onClose }) => {
  if (!hotel) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>X</button>
        <img
          src={hotel.docAvatar && hotel.docAvatar.url}
          alt="Hotel Avatar"
          style={{ width: "100%", height: "15rem" }}
        />
        <h2>{hotel.firstName}</h2>
        <h3>{hotel.lastName}</h3>
        <p>{hotel.content}</p>
        <p>Price: ₹{hotel.price}/day</p>
        <p>Email: {hotel.email}</p>
        <p>Phone: {hotel.phone}</p>
        <p>Rating: {hotel.rating}</p>
      </div>
    </div>
  );
};

export default Popup;
