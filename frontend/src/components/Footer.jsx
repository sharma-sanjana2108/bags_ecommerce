import React from "react";
import "../styles/Footer.css";
import itlogo from "../assets/itlogo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import visa from "../assets/visa.svg";
import visaround from "../assets/visa-round.svg";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="popular-search">
        <h5>Popular Searches</h5>
        <div className="all-tags">
          <a href="">Luggage Bags</a>&#8739;
          <a href="">Cabin Bags</a>&#8739;
          <a href="">Laptop Bags</a>&#8739;
          <a href="">Duffle Bags</a>&#8739;
          <a href="">Backpacks</a>&#8739;
          <a href="">Hard Trolley Bags</a>&#8739;
          <a href="">Lock for Bags</a>&#8739;
          <a href="">Soft Trolley Bags</a>&#8739;
          <a href="">Casual Backpacks</a>&#8739;
          <a href="">Trekking Bags</a>&#8739;
          <a href="">School Bags</a>&#8739;
          <a href="">College Bags</a>&#8739;
          <a href="">Office Bags</a>&#8739;
          <a href="">Wheel Duffle Bags</a>&#8739;
          <a href="">Kids Backpack</a>&#8739;
          <a href="">Briefcase Bags</a>&#8739;
          <a href="">Sling Bags</a>&#8739;
          <a href="">Travel Neck Pillow</a>&#8739;
          <a href="">Travel Eye Mask</a>&#8739;
          <a href="">Large Trolley Bags</a>&#8739;
          <a href="">Medium Size Trolley Bags</a>&#8739;
          <a href="">Weekender Bags</a>&#8739;
          <a href="">Travel Bags for Short Trips</a>&#8739;
          <a href="">Luggage for Long Trip</a>&#8739;
          <a href="">Kids Luggage</a>
        </div>
      </div>

      <div className="paragraph">
        <h6>BUY TRAVEL BAGS & LUGGAGE ONLINE IN INDIA AT Indian web</h6>
        <p>
          People traveling to different places often focus on selecting the
          perfect destination, planning activities, and choosing accommodations.
          One aspect that they often overlook is the choice of luggage. A
          comfortable and well-designed suitcase is a fundamental part of any
          successful trip. Imagine effortlessly gliding through airports,
          maneuvering crowded streets, and neatly organizing your belongings in
          a thoughtfully designed suitcase. A comfortable luggage trolley
          ensures that you can fully enjoy the journey, as it takes away the
          hassle and stress of managing your luggage. The right suitcase is not
          just a travel accessory; it's your reliable partner in creating
          memorable travel experiences. Thus, American Tourister provides
          high-quality, lightweight, and exclusively featured travel trolley
          bags that can enhance your travel experience, whether you are alone or
          with kids.
        </p>

        <h6>LUGGAGE BAGS TO MEET TRAVEL NEEDS</h6>
        <p>
          {" "}
          Whether you're going on a short weekend getaway or a month-long
          expedition, having the right luggage size is crucial. For short trips
          and keeping your essentials close, a cabin size trolley bag is
          perfect. To acquire a balance between space and convenience, prefer
          medium luggage, ideal for trips lasting several days to a week. Large
          suitcases are generous in size; these suitcases are ideal for extended
          vacations, family travel, or journeys requiring extra packing space.
          With features like TSA Lock, Expander, Double Wheels, Garment Suiter,
          and Eco-Friendly, you can also buy trolley bags based on their type.
          Hard luggage offers durability and impact resistance, ensuring your
          belongings remain secure throughout your journey. On the other hand, a
          soft trolley suitcase is lightweight and versatile, perfect for
          travelers who prefer adaptability.
        </p>

        <h6>BACKPACKS TO LOOK PRACTICAL AND STYLISH</h6>

        <p>
          Whether you're exploring the urban jungle, embarking on a hiking
          adventure, or simply commuting to work, a well-chosen backpack can
          make a world of difference in your journey. The beauty of backpacks
          lies in their practicality. They come in various types and colors,
          each tailored to meet a specific need and style. Casual backpacks are
          perfect for everyday use, while laptop backpacks offer dedicated
          compartments to safeguard your tech gear. Weekender and trekking
          backpacks are built to handle the rigors of outdoor exploration.
          Additionally, backpacks often feature handy extras like rain covers
          and USB charge ports, ensuring you stay connected and prepared while
          on the move.
        </p>
      </div>

      <div className="footer-list">
        <ul>
          <li>SUPPORT</li>
          <li>Service and Warranty</li>
          <li>Contact Us</li>
          <li>TSA Lock Instructions</li>
        </ul>

        <ul>
          <li>QUICK LINKS</li>
          <li>Damage Policy</li>
          <li>Care and Cleaning</li>
          <li>Packing Tips</li>
          <li>Site Map</li>
        </ul>

        <ul>
          <li>OUR COMPANY</li>
          <li>About American Tourister</li>
        </ul>

        <ul>
          <li>ACCOUNT</li>
          <li>Track Order</li>
          <li>Sign In</li>
          <li>Shop all products</li>
        </ul>
      </div>

      <div className="footer-logo">
        <div className="bottom-icons">
          <img
            style={{ marginLeft: "28px" }}
            src={itlogo}
            alt="Bootstrap"
            width="100"
            height="60"
          />
          <ul className="social-icons">
            <li>
              <i
                className="bi bi-facebook"
                style={{ fontSize: "1.6rem", color: "gray" }}
              ></i>
            </li>
            <li>
              <i
                className="bi bi-instagram"
                style={{
                  fontSize: "1.6rem",
                  marginInline: "16px",
                  color: "gray",
                }}
              ></i>
            </li>
            <li>
              <i
                className="bi bi-youtube"
                style={{
                  fontSize: "1.6rem",
                  marginRight: "60px",
                  color: "gray",
                }}
              ></i>
            </li>
          </ul>
        </div>

        <hr />

        <span className="footer-content">
          <ul className="privacy-footer">
            <li>Terms & Condition</li>
            <li>Privacy</li>
            <li>Personal Information Collection Statement</li>
            <li>
              <img id="visaround" src={visaround} alt="" />
              <img id="visa" src={visa} alt="" />
            </li>
            <ul id="india">
              <li>India</li>
            </ul>
          </ul>
          <p>Copyright © 2024 Developed and managed by Quadrant</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
