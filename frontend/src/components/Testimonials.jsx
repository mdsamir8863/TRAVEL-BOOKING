import '../styles/Testi.css'

const Testimonials = () => {
  return (
    <div className="testimonialContainer">
      <h2 className="testimonialTitle">What Our Travelers Say</h2>
      <div className="testimonialRow">
        <div className="testimonialCard">
          <p className="testimonialText">We had an amazing time on our trip to Europe! The tour was well-planned, and our guide was knowledgeable and friendly. We can&apos;t wait to plan our next adventure with this travel agency.</p>
          <p className="testimonialAuthor">The Smith Family</p>
        </div>
        <div className="testimonialCard">
          <p className="testimonialText">I was blown away by the beauty of the landscapes we saw on our African safari. The accommodations were top-notch, and the staff were incredibly helpful. This trip exceeded all my expectations!</p>
          <p className="testimonialAuthor">Emily Johnson</p>
        </div>
        <div className="testimonialCard">
          <p className="testimonialText">Our honeymoon in Bali was everything we dreamed of and more. The travel agency took care of every detail, making our trip truly unforgettable.</p>
          <p className="testimonialAuthor">Mr. and Mrs. Lee</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
