import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import "../styles/doctor.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);
  const fetchDoctors = async () => {
    try {
      const {
        data,
      } = await axios.get("http://localhost:4000/api/v1/user/doctors", {
        withCredentials: true,
      });
      setDoctors(data.doctors);
      console.log(data);
      

      console.log(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };



  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }


  const handleDelete = async(id)=>{
    console.log(id)
const API = `http://localhost:4000/api/v1/user/doctor/${id}`
    const {data} = await axios.delete(API)
    console.log(data);
    fetchDoctors()
  }


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => { 
    fetchDoctors();
  }, []);
  return (
    <section className="page doctors">
      <h1>Hotels</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => {
            return (
              <div id="docCard"  className="card" key={element._id}>
                <div className="docImg">

                  <img
                    src={element.docAvatar && element.docAvatar.url}
                    alt="doctor avatar"
                  />
                  <h4 className="docName">{`${element.firstName}`}</h4>
                </div>
                <div className="details">
                  <p style={{color:"#696969",fontWeight:100, fontSize:"1rem"}}>
                     {element.content} 
                  </p>
                  <p>
                    price: <span>₹{element.price}/day</span>
                  </p>
                  <p>
                    Raring: <span>{element.rating}</span>
                  </p>
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    Started: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p>
                    Location: <span>{element.lastName}</span>
                  </p>
                  <p>
                    Aadhar Number: <span>{element.nic}</span>
                  </p>
                 <button onClick={()=>handleDelete(element?._id)} style={{backgroundColor:"red"}}>Delete</button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Registered Hotel Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
