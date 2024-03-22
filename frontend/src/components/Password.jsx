import React, { useEffect, useState } from "react";
import "../styles/Password.css";
import { updatePassword } from "../features/bags/bagAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Password = () => {
  const [checkupdate, setcheckupdate] = useState(false);

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { password, confirmPassword } = formData;

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serverresponse = await updatePassword(formData);
      if (serverresponse && serverresponse.data) {
        toast.success(serverresponse.data.message);
        setcheckupdate(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (checkupdate) {
      navigate("/");
    }
  }, [checkupdate]);

  return (
    <div className="container-fluid">
      <div className="password-container">
        <div className="logo-container">Change Password</div>

        <form className="password-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <input
              type="new-password"
              id="password"
              placeholder="New Password"
              required=""
              name="password"
              value={password}
              onChange={handleChange}
            />

            <input
              required=""
              type="new-password"
              id="email"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button className="form-submit-btn" type="submit">
            Update Password
          </button>
        </form>

        <p className="signup-link">
          Don't have an account?
          <a href="#" className="signup-link link">
            {" "}
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Password;
