import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();


const ratingArr = [
  "⭐⭐⭐⭐⭐",
  "⭐⭐⭐⭐",
  "⭐⭐⭐",
  "⭐⭐",
  "⭐",
]
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("price", price);
      formData.append("content", content);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("rating", rating);
    
      formData.append("docAvatar", docAvatar);
      await axios
        .post("http://localhost:4000/api/v1/user/doctor/addnew", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/hotels");
          console.log("Content >>>",content);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setRating("")
          setContent("")
          setPrice("")
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="page">
      <section className="container add-doctor-form">
        <h1 className="form-title">REGISTER A NEW Hotel</h1>
        <form onSubmit={handleAddNewDoctor}>
          <div className="first-wrapper">
            <div className="avatar">
              <img
                src={
                  docAvatarPreview ? `${docAvatarPreview}` : "/docHolder.jpg"
                }
                alt="Hotel Image"
                className="Hotel-img"
              />
              <label htmlFor="avatar" className="avatar-label">
                Upload Image
              </label>
              <input
                type="file"
                id="avatar"
                onChange={handleAvatar}
                className="avatar-input"
              />
            </div>
            <div className="inputs">
              <input
                type="text"
                placeholder="Hotel Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Hotel Description"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Location"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input-field"
              />
              <input
                type="number"
                placeholder="₹4599/day"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
              <input
                type="number"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
              />
              <input
                type="number"
                placeholder="Aadhar Number"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="input-field"
              />
              <input
                type={"date"}
                placeholder="Since 1920"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="input-field"
              />
              
              <select
                value={rating}
                onChange={(e) => {
                  setRating(e.target.value);
                }}
                className="input-field"
              >
                <option value="">Your Hotel Rating</option>
                {ratingArr.map((rating, index) => {
                  return (
                    <option value={rating} key={index}>
                      {rating}
                    </option>
                  );
                })}
              </select>
              <button type="submit" className="submit-btn">
                Register New Hotel
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddNewDoctor;
