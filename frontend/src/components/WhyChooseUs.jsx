import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <div className="text-section">
                <div className="features">Features</div>
                <h2>Why Choose Us</h2>
                <p>
                    At HealthHub Medical Institute, we understand the importance of quality healthcare. Here are a few reasons why you should choose us for your medical needs.
                </p>
                <div className="features-list">
                    <div className="feature-item">
                        
                        <div>
                            <h3>Experience</h3>
                            <p>Our team of experienced doctors and medical professionals are dedicated to providing the best care for our patients.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        
                        <div>
                            <h3>Positive</h3>
                            <p>Our friendly and professional staff are here to make your visit as comfortable and stress-free as possible.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        
                        <div>
                            <h3>Quality</h3>
                            <p>We are committed to providing the highest quality of care and services to our patients.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        
                        <div>
                            <h3>24 Hours</h3>
                            <p>Our support team is available 24/7 to assist you with any questions or concerns you may have.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-section">
                <img src="https://hospitality-management.vercel.app/img/feature.jpg" alt="Feature" />
            </div>
        </div>
    );
};

export default WhyChooseUs;
