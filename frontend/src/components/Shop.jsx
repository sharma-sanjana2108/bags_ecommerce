import React, { useEffect } from "react";
import "../styles/Shop.css";
import { addToCart, getData } from "../features/bags/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Shop = () => {
  const { bagData } = useSelector((state) => state.bags);

  const filteredProducts = bagData
    ? bagData.filter((item) => item.category === "Popular")
    : [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const dispatchItemCart = (currentProducts) => {
    dispatch(addToCart(currentProducts));
  };

  return (
    <>
      <div className="shop-section">
        <h2>Shop products</h2>
        <div id="gradient-line"></div>
        <span className="shop-buttons">
          <button id="popular-btn">Most popular</button>
          <Link to={"/shopnew"}>
            <button id="new-btn">What's new</button>
          </Link>
          <Link to={"/bestseller"}>
            {" "}
            <button id="bestseller-btn">Bestseller</button>
          </Link>
        </span>
      </div>

      <div className="shop-container">
        {filteredProducts.length == 0 && <h4>Pending</h4>}

        {filteredProducts.length > 0 &&
          filteredProducts.map((item, index) => (
            <div className="card scroll-item" key={index}>
              <img src={item.image} className="homebag" alt="..." />
              <div className="card-body card-text">
                <h4 className="card-title home-title">{item.title}</h4>

                <h5 className="card-text">₹ {item.price}</h5>
                <button
                  id="homebtn"
                  className="btn btn-dark"
                  onClick={() => dispatchItemCart(item)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shop;
