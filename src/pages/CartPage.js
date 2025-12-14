import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/actions";

import Footer from "../components/Footer";
import "../App.css";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="page-container">
      <div className="page-content">

        <div className="cart-page">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img
                      className="cart-img"
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="cart-info">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>

                      <div className="cart-controls">
                        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

                        <button
                          className="remove-btn"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove
                        </button>
                      </div>

                      <strong>
                        ${item.price * item.quantity}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <h3>Total: ${total}</h3>
                <button className="primary-btn">
                  Proceed to checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
