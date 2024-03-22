import React from "react";
import "../styles/Cart.css";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.bags);

  const total = cartItems
    ? cartItems.reduce((p, currentItem) => {
        return (
          p +
          parseInt(currentItem.price.replace(",", "")) *
            currentItem.cartQuantity
        );
      }, 0)
    : 0;

  return (
    <>
      <div className="cart-container">
        <CartProduct />

        <div id="card-total" className="card p-5 w-50 my-4">
          <h2>Shopping Cart Total</h2>
          <br />
          <br />
          <h3>Total Amount : ${total}</h3>
          <br />
          <button className="btn btn-danger btn-sm pay-btn w-50">
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
