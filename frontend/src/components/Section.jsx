import React from "react";
import "../styles/Section.css";
import luggage from "../assets/luggage.png";
import backpacks from "../assets/backpacks.png";
import duffles from "../assets/duffles.png";
import tilt1 from "../assets/tilt1.jpg";
import kidstilt from "../assets/kidstilt.jpg";
import tilt3 from "../assets/tilt3.jpg";

const Section = () => {
  return (
    <>
      <div className="best-sellers">
        <img className="tilt-img" src={tilt1} alt="" />
        <div className="bestsellers-text">
          <h2>Best Sellers</h2>
          <div id="color-line"></div>
          <p>
            Shop Indian Tourister's best-sellers online. Discover the most
            popular, top-rated travel gear handpicked by American Tourister
            fans!
          </p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="new-arrivals">
        <img className="tilt-img" src={kidstilt} alt="" />
        <div className="newarrivals-text">
          <h2>New Arrivals</h2>
          <div id="color-line"></div>
          <p>
            Shop new carry-on luggage to backpacks. Freshen up your next trip
            with the latest in luggage and travel gear.
          </p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="three-bags">
        <div className="luggage">
          <div id="luggage-bag">
            <img src={luggage} className="bag-image" alt="" />
          </div>
          <h5>Luggage More</h5>
        </div>
        <div className="backpacks">
          <div id="backpacks-bag">
            <img src={backpacks} className="bag-image" alt="" />
          </div>
          <h5>Backpacks More</h5>
        </div>
        <div className="duffles">
          <div id="duffles-bag">
            <img src={duffles} className="bag-image" alt="" />
          </div>
          <h5>Duffles More</h5>
        </div>
      </div>

      <div className="here-foru">
        <img className="tilt-img" src={tilt3} alt="" />
        <div className="here-text">
          <h2>Here For You</h2>
          <div id="color-line"></div>
          <p>
            Discover answers for our most frequently asked questions plus how to
            deal with any issue you might encounter.
          </p>
          <button>Let Us Help</button>
        </div>
      </div>
    </>
  );
};

export default Section;
