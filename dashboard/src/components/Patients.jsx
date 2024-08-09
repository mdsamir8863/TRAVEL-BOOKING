import  { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../styles/Patients.css";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/allpatient");
      console.log(response);
      setPatients(response.data.patients);
    } catch (error) {
      toast.error("Error fetching patients");
      
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">Patients</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>NIC</th>
            <th>Phone</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.firstName} {patient.lastName}</td>
              <td>{patient.email}</td>
              <td>{patient.nic}</td>
              <td>{patient.phone}</td>
              <td>{patient.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
