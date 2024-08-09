import axios from "axios";
import  { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/message/getall",
          { withCredentials: true }
        );
        setMessages(data.messages);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page messages">
      <h1 style={{textTransform:"uppercase"}}>appointment</h1>
      <div className="banner" >
        {messages && messages.length > 0 ? (
          messages.map((element) => {
            return (
              <div className="card" key={element._id}>
                <div className="details" >
                  <p>
                    First Name: <span>{element.firstName}</span>
                  </p>
                  <p>
                    Last Name: <span>{element.lastName}</span>
                  </p>
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    Message: <span>{element.message}</span>
                  </p>
                <button style={{fontSize: "1.2rem",margin:"1rem 0"}}><a style={{textDecoration:"none", color:"white"}} href={`tel:${element.phone}`}>Call This Patient</a></button>
                <button style={{fontSize: "1.2rem"}}><a style={{textDecoration:"none", color:"white"}} href={`mailto:${element.email}`}>Email This Patient</a></button>
                </div>
               
              </div>
            );
          })
        ) : (
          <h1>No Messages!</h1>
        )}
      </div>
    </section>
  );
};

export default Messages;
