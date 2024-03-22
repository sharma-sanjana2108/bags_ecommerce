import React, { useContext } from "react";
import "../styles/Backpacks.css";
import "../styles/Cart.css";
import { ThemeContext } from "../features/Context";
import "../index.css";
import noitem from "../assets/noitem.png";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeCart,
} from "../features/bags/bagSlice";
import { Link } from "react-router-dom";

const CartProduct = () => {
  const { cartItems } = useSelector((state) => state.bags);
  const { darkmode } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const handleRemove = (_id) => {
    dispatch(removeCart(_id));
  };

  const increaseQty = (currentItem) => {
    dispatch(increaseItem(currentItem));
  };

  const decreaseQty = (currentItem) => {
    dispatch(decreaseItem(currentItem));
  };

  return (
    <>
      {cartItems && cartItems.length === 0 ? (
        <div
          className={`card new-empty mx-auto mt-5 ${
            darkmode ? "dark" : "light"
          }`}
        >
          <div className="card-body text-center ">
            <img src={noitem} id="noitem" />
            <p className="card-text cart-para">
              "It feels a bit lonely!" Let's fill it up with some fantastic
              items.
            </p>
            <h6 className="card-title cart-title">
              "Explore our collection and add some sweetness to your bag. Happy
              shopping filled with joy!"
            </h6>
            <Link to={"/"}>
              <button className="btn btn-primary mt-4 mb-5 continue-shop mr-2">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="product-list">
          {cartItems.map((currentItem, index) => (
            <div className="card product-card" key={index}>
              <img
                src={currentItem.image}
                className="card-img-top bag-img"
                alt={currentItem.title}
              />
              <div className="card-body">
                <h4 className="card-title text-center">{currentItem.title}</h4>
                <p className="card-text">{currentItem.description}</p>
                <h5 className="card-title text-center">
                  Qty: {currentItem.cartQuantity}
                </h5>
                <div className="qty-btns">
                  <button
                    id="plus-btn"
                    onClick={() => increaseQty(currentItem)}
                  >
                    +
                  </button>
                  <button
                    id="minus-btn"
                    onClick={() => decreaseQty(currentItem)}
                  >
                    -
                  </button>
                </div>
                <h5 className="card-text text-center">
                  Price: {currentItem.price}
                </h5>
                <button
                  className="btn btn-dark remove-btn"
                  onClick={() => handleRemove(currentItem._id)}
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CartProduct;
