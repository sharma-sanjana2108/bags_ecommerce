import React from "react";
import bag3new from "../assets/bag3new.png";
import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import bag4 from "../assets/bag4.png";
import bag5 from "../assets/bag5.png";
import bag6 from "../assets/bag6.png";
import Shop from "./Shop";
import Section from "./Section";
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide home-slider"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bag3new} className="d-block w-100 h-25" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bag2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bag1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bag4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bag5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bag6} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Shop />
      <Section />
      <Slider />
    </>
  );
};

export default HeroSection;
