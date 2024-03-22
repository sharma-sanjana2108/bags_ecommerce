import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginData } from "../features/bags/bagAction";

const Login = ({ handelLoginSuccess, isLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serverresponse = await loginData(formData);
      if (serverresponse) {
        handelLoginSuccess(serverresponse);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="container-fluid-main">
      <form onSubmit={(e) => handleSubmit(e)}>
        <p className="logo">Welcome back!!</p>
        <input
          type="email"
          placeholder="Email"
          required=""
          name="email"
          value={email}
          onChange={handleChange}
        />

        <input
          type="current-password"
          placeholder="Password"
          required=""
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button className="login">Log In</button>

        <Link to={"/profile"}>
          <button className="create-account">Create New Account</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
