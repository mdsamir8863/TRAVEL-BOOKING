import  { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = ({ user: admin }) => {
  const [appointments, setAppointments] = useState([]);




  const Appointments = async () => {
    try {
      const {data} = await axios.get("http://localhost:4000/api/v1/user/allpatient");
      console.log(data.patients,"<><><");
      setAppointments(data?.patients);
    } catch (error) {
      toast.error("Error fetching patients");
      
    }
  };

  const fetchAppointments = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/appointment/getall",
        { withCredentials: true }
      );

      // setAppointments(data.appointments);
      console.log("......", data.appointments);
    } catch (error) {
      setAppointments([]);
      toast.error("Failed to fetch appointments");
    }
  };
  

  useEffect(() => {
   
    fetchAppointments();
    Appointments();

  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { isAuthenticated } = useContext(Context);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png" alt="docImg" />
            <div className="content">
              <div>
                <p>Hello ,</p>
                <h5>{admin && `${admin.firstName} ${admin.lastName}`} </h5>
              </div>
              <p>
                Welcome to our hospital management system. Manage your appointments and patient care with ease.
              </p>
            </div>
          </div>
          <Link to={'/appointments'} className="secondBox" style={{cursor:"pointer",textAlign:"center"}}>
            <p>See All Appointments</p>
            
          </Link>
          <Link to={'/doctors'} className="thirdBox">
            <p style={{cursor:"pointer",textAlign:"center"}}>Registered Doctors</p>
            
          </Link>
        </div>
        <div className="banner">
          <h5>Recent patients</h5>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gander</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0
                ? appointments.map(({_id,firstName,lastName,email,gender,phone}) => (
                    <tr key={_id}>
                      <td>{`${firstName} ${lastName}`}</td>
                      {/* <td>{appointment.appointment_date.substring(0, 16)}</td> */}
                      <td>{email}</td>
                      <td>{phone}</td>
                      <td>{gender}</td>
                     
                    </tr>
                  ))
                : null}

                <Link to={'/patients'} style={{textDecoration:"none"}}>

                <button style={{marginTop:"1rem"}}>See All Patient</button>
                </Link>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
