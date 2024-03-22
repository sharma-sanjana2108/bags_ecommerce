import React, { useContext, useEffect, useState } from "react";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerData } from "../features/bags/bagAction";
import { ThemeContext } from "../features/Context";
import { toast } from "react-toastify";
const Profile = () => {
  const navigate = useNavigate();
  const { register, setregister } = useContext(ThemeContext);

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serverresponse = await registerData(formData);
      if (serverresponse.message) {
        toast.success(serverresponse.message);
        setregister(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (register) {
      navigate("/login");
    }
  }, [register]);

  return (
    <div className="register-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>

        <label>
          <input
            required=""
            placeholder="Full Name"
            type="text"
            className="input"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            required=""
            placeholder="Email"
            type="email"
            className="input"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            required=""
            placeholder="Password"
            type="new-password"
            className="input"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            required=""
            placeholder="Confirm password"
            type="new-password"
            className="input"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ? <Link to={"/login"}>Signin</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Profile;
