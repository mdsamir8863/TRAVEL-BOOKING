import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "../styles/Footer.css";

const Footer = () => {


  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <Link to="/" className="logo-img">
            Travel<span style={{ color: "#ffce00" }}>Mate</span>
          </Link>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/services"}>Services</Link>
            </ul>
          </div>
          <div>
            <h4>Travel Inspiration</h4>
            <p style={{ fontStyle: 'italic', color: 'gray', fontSize: '1.1rem', fontWeight: '300',width:'300px' }}>“The world is a book, and those who do not travel read only one page.” - Saint Augustine</p>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>+91 74839 82440</span>
            </div>
            <div>
              <MdEmail />
              <span>info@travelMate.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>123 Travel Lane, Bengaluru, India</span>
            </div>
          </div>
        </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <p style={{color: 'gray', fontSize: '1.2rem', fontWeight: '400'}}>Proudly made and developed by</p>
            <h4 style={{color: '#ffce00', fontSize: '1.5rem', fontWeight: 'bold'}}>Nazhath Fathima</h4>
          </div>
      </footer>
    </>
  );
};

export default Footer;
