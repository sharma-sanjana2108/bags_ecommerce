import React from "react";
import "../styles/Slider.css";
import center2 from "../assets/center2.jpg";
import flybag from "../assets/flybag.png";
import brandtoday from "../assets/brandtoday.png";
import twogirls from "../assets/twogirls.png";
import water from "../assets/water.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import warranty from "../assets/warranty.png";
import delivery from "../assets/delivery.svg";
import trusted from "../assets/trusted.png";
import center from "../assets/center.jpg";
import originalstore from "../assets/originalstore.svg";

const Slider = () => {
  return (
    <div className="slider-main">
      <div className="slider-section">
        <img src={center2} alt="" />
        <img src={flybag} alt="" />
        <img src={center} alt="" />
        <img src={twogirls} alt="" />
        <img src={water} alt="" />
      </div>

      <div className="social">
        <div className="stay-social">
          <h1>Stay Social!</h1>
          <h2>#INDIANTOURISTER</h2>
          <div id="color-line"></div>
        </div>

        <div className="follow">
          <span>
            <h4>Follow us on:</h4>
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
          </span>
        </div>
      </div>

      <div className="orange-slider">
        <div className="first-orange">
          <div className="warranty">
            <img id="warranty-img" src={warranty} alt="" />
            <h5>International Warranty</h5>
            <p>
              Indian Tourister is a trusted global brand offering high-quality
              travel products like luggage, backpacks, and accessories. With a
              presence in 120+ countries, it's a go-to for millions of
              travelers.
            </p>
          </div>

          <div className="fast-delivery">
            <img id="delivery-img" src={delivery} alt="" />
            <h5>Fast Delivery</h5>
            <p>
              We deliver online orders to most of India within 5-7 working days
              via efficient courier services.
            </p>
          </div>
        </div>

        <div className="second-orange">
          <div className="trusted">
            <img id="trusted-img" src={trusted} alt="" />
            <h5>Trusted Globally Since 1933</h5>
            <p>
              Indian Tourister innovates with award-winning luggage produced
              with world-class quality standards.
            </p>
          </div>

          <div className="store">
            <img id="store-img" src={originalstore} alt="" />
            <h5>Full Original Store</h5>
            <p>
              One-stop shop for exploring the complete Indian Tourister
              collection online.
            </p>
          </div>
        </div>
      </div>

      <div className="brand-today">
        <img src={brandtoday} alt="" />
      </div>

      <div className="footer-form">
        <h4>Get the latest news from Indian Tourister.</h4>
        <form className="newsletter">
          <input
            id="color-content"
            type="text"
            placeholder="*Your email address"
          />
        </form>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Slider;
