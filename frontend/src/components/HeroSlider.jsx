import Slider from 'react-slick';
import '../styles/heroSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const departmentsArray = [
    {
        // name: "Pediatrics",
        imageUrl: "https://www.apprenticeship.ng/wp-content/uploads/2021/06/Travel-and-tourism-Business-plan-1024x1024.jpg",
    },
    {
        // name: "Orthopedics",
        imageUrl: "https://hohodelhi.com/golden-triangle-tour-package-3n-4d/images/SmallImage.jpg",
    },
    
    {
        // name: "Neurology",
        imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/8c/13/f4.jpg",
    },
   
    
  
  
   
];

const DepartmentSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="department-slider">
            <Slider {...settings}>
                {departmentsArray.map((department, index) => (
                    <div key={index} className="slide">
                        <img src={department.imageUrl} alt={department.name} />
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DepartmentSlider;
