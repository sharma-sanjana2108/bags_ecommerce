import React, { useEffect } from "react";
import "../styles/Shop.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getData } from "../features/bags/bagSlice";

const ShopNew = () => {
  const { bagData } = useSelector((state) => state.bags);

  const filteredProducts = bagData.filter((item) => item.category === "New");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const dispatchItemCart = (currentProducts) => {
    dispatch(addToCart(currentProducts));
  };

  return (
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
  );
};

export default ShopNew;
