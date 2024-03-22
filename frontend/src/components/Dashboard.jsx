import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = ({ handelDashboard }) => {
  const [userdata, setuserdata] = useState({});
  const navigate = useNavigate();
  const deactivateAcount = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("token");
    localStorage.removeItem("theme");
    toast.success("deactivate account successfully");
    handelDashboard();
  };

  useEffect(() => {
    const checkdashboard = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.post(
          "http://localhost:8100/api/products/dashboard",
          null,
          {
            headers: { authoraization: token },
            withCredentials: true,
          }
        );
        setuserdata(res.data);
      } catch (err) {
        throw err;
      }
    };
    checkdashboard();
  }, []);

  return (
    <>
      {Object.keys(userdata).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <h4 className="display-6 text-center mt-4">Manage Your Account</h4>
          <div className="container-fluid">
            <div className="dashboard-card">
              <div className="image"></div>
              <div className="card-info">
                <span>
                  { userdata.user&&userdata.user.name ? (
                    userdata.user.name
                  ) : (
                    <p>Status is loading...</p>
                  )}
                </span>
                <p>
                  { userdata.user&&userdata.user.email ? (
                    userdata.user.email
                  ) : (
                    <p>Status is loading...</p>
                  )}
                </p>
              </div>
              <Link to={"/password"} className="button">
                Change Password
              </Link>
              <button className="button" onClick={() => deactivateAcount()}>
                Deactivate Account
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
