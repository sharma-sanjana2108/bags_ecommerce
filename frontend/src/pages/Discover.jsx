import React from "react";
import "../styles/Backpacks.css";
import discover1 from "../assets/discover1.jpg";
import center from "../assets/center.jpg";
import discover3 from "../assets/discover3.jpg";
import discover4 from "../assets/discover4.jpg";
import discover5 from "../assets/discover5.jpg";
import discover6 from "../assets/discover6.png";
import discover7 from "../assets/discover7.png";
import discover8 from "../assets/discover8.png";

const Discover = () => {
  return (
    <>
      <h4 className="display-6 text-center">DISCOVER THE LASTEST</h4>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row row-cols-1 row-cols-md-2 g-4 p-5 ">
          <div className="col">
            <div className="card discover-main">
              <img src={discover1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Chasing Colours Of Travel
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card discover-main">
              <img src={center} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Travel Buddy</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card discover-main">
              <img src={discover3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">
                  The Not So Solo, Solo Travel
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card discover-main">
              <img src={discover4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Where the funs AT 2022
                </h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card discover-main">
              <img src={discover5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Ready.Set</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card discover-main">
              <img src={discover6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Study Abroad</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card discover-main">
              <img src={discover7} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">travel with friends</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card discover-main">
              <img src={discover8} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">little explorers</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
