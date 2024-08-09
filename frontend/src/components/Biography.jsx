import PropTypes from 'prop-types';

const Biography = ({url,url2}) => {
  return (
    <>
      <div className="container biography" style={{borderTop:"2px solid darkblue"}}>
        <div className="banner" style={{display: "flex", flexDirection: "column"}}>
          <img style={{borderRadius:"20px",width:"100%"}} src={url} alt="our story image" />
          <img style={{borderRadius:"20px",width:"100%"}} src={url2} alt="our story image" />
        </div>
        <div className="banner">
          <p>About Us</p>
          <h3  style={{color:"darkblue",borderTop:"1px solid darkblue", width:"100%",marginTop:"1.2rem",paddingTop:"10px",}}>Our Story</h3>
          <p style={{color:"gray"}}>
            At TravelHub, we are dedicated to providing exceptional travel experiences to our customers. Our team of experienced professionals is committed to delivering personalized services that address the unique needs of each traveler. We believe in fostering a culture of innovation, excellence, and customer satisfaction in everything we do.
          </p>
          <h3 style={{color:"darkblue",borderTop:"1px solid darkblue", width:"100%",marginTop:"1.2rem",paddingTop:"10px",}}>Our Vision</h3>
          <p style={{color:"gray"}}>
            Our vision is to be the leading travel service provider in the region, recognized for our commitment to quality, customer satisfaction, and community engagement. We strive to create unforgettable travel experiences by providing accessible, affordable, and high-quality services today.
          </p>
          <h3 style={{color:"darkblue",borderTop:"1px solid darkblue", width:"100%",marginTop:"1.2rem",paddingTop:"10px",}}>Our Mission</h3>
          <p style={{color:"gray"}}>
            Our mission is to deliver comprehensive travel services that meet the evolving needs of our customers and the community. We aim to achieve this by investing in our people, embracing the latest technologies, and fostering partnerships that promote travel and exploration.
          </p>
          <h3 style={{color:"darkblue",borderTop:"1px solid darkblue", width:"100%",marginTop:"1.2rem",paddingTop:"10px",}}>Our Values</h3>
          <p style={{color:"gray"}}>
            At TravelHub, we value innovation, integrity, respect, and excellence. We believe that these values are essential in guiding our actions and decisions, ensuring that we always put the needs of our customers first.
          </p>
        </div>
      </div>
    </>
  );
};

Biography.propTypes = {
  url: PropTypes.string.isRequired,
  url2: PropTypes.string.isRequired,
};

export default Biography;
