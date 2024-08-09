import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "https://navkaarhospitals.com/wp-content/uploads/2023/11/Pediatrics-navkaar-hospital-img.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "https://rxdx.in/wp-content/uploads/2022/01/banner-orthopedic.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "https://www.getdoc.com/wp-content/uploads/2016/07/27faff5ddddd.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "https://www.klehospital.org/wp-content/uploads/2023/04/neurology.jpg",
    },
    {
      name: "Oncology",
      imageUrl: "https://vishwarajhospital.com/wp-content/uploads/2023/07/Urological-Onco-BLog.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "https://s3-us-west-2.amazonaws.com/utsw-patientcare-web-production/original_images/radiology-600x338.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "https://media.istockphoto.com/id/1501185765/photo/man-doing-physical-therapy-and-walking-on-bars.webp?b=1&s=170667a&w=0&k=20&c=O_ewXQaubYkHlHb-qOqZAqfVae4S5EZ7ogzj-rOHLKU=",
    },
    {
      name: "Dermatology",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqVJSyPnUImcW6EMnK-UUbuXcr_NU8ZEa_g&s",
    },
    {
      name: "ENT",
      imageUrl: "https://www.manipalhospitals.com/jayanagar/uploads/specialities/facts_figures_photo/ent-hopital-jayanagar.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
