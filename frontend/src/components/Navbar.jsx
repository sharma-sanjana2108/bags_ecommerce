import React, { useContext } from "react";
import "../styles/Navbar.css";
import itlogo from "../assets/itlogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeContext } from "../features/Context";
import "../index.css";

const Navbar = ({ hadelLogOutSuccess, isLoggedIn }) => {
  const { cartItems } = useSelector((state) => state.bags);
  const { darkmode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <span className="top-nav">
        <p>Free delivery on all orders in India</p>
      </span>

      <nav className="navbar navbar-expand-lg main-navbar">
        <div className={`container-fluid ${darkmode ? "dark" : "light"}`}>
          <Link to={"/"}>
            <img src={itlogo} alt="Bootstrap" width="100" height="60" />
          </Link>
          <button
            style={{ backgroundColor: "white" }}
            className="navbar-toggler side-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              style={{ backgroundColor: "white" }}
              className="navbar-toggler-icon "
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 mx-5 left-headers">
              <li className="nav-item mx-3 top-item">
                <Link to={"/luggage"} className={darkmode ? "darktheme" : ""}>
                  Luggage
                </Link>
              </li>

              <li className="nav-item mx-3 top-item">
                <Link to={"/backpacks"} className={darkmode ? "darktheme" : ""}>
                  Backpacks
                </Link>
              </li>

              <li className="nav-item mx-3 top-item">
                <Link to={"/duffles"} className={darkmode ? "darktheme" : ""}>
                  Duffles
                </Link>
              </li>

              <li className="nav-item mx-3 top-item">
                <Link
                  to={"/browsemore"}
                  className={darkmode ? "darktheme" : ""}
                >
                  Browse More
                </Link>
              </li>

              <li className="nav-item mx-3 top-item">
                <Link to={"/discover"} className={darkmode ? "darktheme" : ""}>
                  Discover
                </Link>
              </li>
            </ul>

            <ul
              style={{ fontSize: "25px" }}
              className="navbar-nav mx-4 side-icons"
            >
              <Link to={"/profile"} className={darkmode ? "darktheme" : ""}>
                <li className="nav-item mx-3">
                  <i className="bi bi-person"></i>
                </li>
              </Link>
              <Link to={"/search"} className={darkmode ? "darktheme" : ""}>
                <li className=" nav-item mx-3">
                  <i className="bi bi-search"></i>
                </li>
              </Link>

              <Link to={"/cart"} className={darkmode ? "darktheme" : ""}>
                <li className=" nav-item mx-3 carticon">
                  <i className="bi bi-cart3">
                    ({cartItems ? cartItems.length : 0})
                  </i>
                </li>
              </Link>

              {isLoggedIn ? (
                <>
                  <Link to={"/dashboard"}>
                    <div className="profile-circle">
                      <li className="nav-item">You</li>
                    </div>
                  </Link>

                  <li className=" nav-item mx-3">
                    {/* <button className="btn btn-danger" onClick={() => dispatch(userLogout()) }>Logout</button> */}
                    <button
                      className="btn btn-danger log-btn"
                      onClick={() => hadelLogOutSuccess()}
                    >
                      Logout
                    </button>
                  </li>

                  <div className="wrapper" onClick={toggleTheme}>
                    <input type="checkbox" name="checkbox" className="switch" />
                  </div>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
