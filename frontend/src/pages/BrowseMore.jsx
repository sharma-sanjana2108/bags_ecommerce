import React, { useEffect } from "react";
import "../styles/Backpacks.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getData } from "../features/bags/bagSlice";

const BrowseMore = () => {
  const { bagData } = useSelector((state) => state.bags);
  const dispatch = useDispatch();

  const filteredProducts = bagData
    ? bagData.filter((item) => item.category === "Browse More")
    : [];

  useEffect(() => {
    dispatch(getData());
  });

  const dispatchItemCart = (currentProducts) => {
    dispatch(addToCart(currentProducts));
  };

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
          {filteredProducts.length === 0 && <h4>Pending</h4>}
          {filteredProducts.length > 0 &&
            filteredProducts.map((item, index) => (
              <div className="col" key={index}>
                <div className="card product-card">
                  <img src={item.image} className="bag-img" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title item-title">{item.title}</h4>
                    <p className="card-text">{item.description}</p>
                    <h5 className="card-text">Price : ₹ {item.price}</h5>
                    <button
                      className="btn btn-dark cart-btn"
                      onClick={() => dispatchItemCart(item)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default BrowseMore;
