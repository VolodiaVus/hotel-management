import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../redux/actions";

const CartModal = ({ isOpen, onClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  // 🔥 Загальна сума всього кошика
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <div key={item.id} className="cart-item">
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Rooms: {item.quantity}</p>

                    {/* 🔥 ПІДСУМОК ДЛЯ ЦІЄЇ КІМНАТИ */}
                    <p className="item-total">
                      Subtotal: ${itemTotal}
                    </p>
                  </div>

                  <div className="cart-controls">
                    <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}

            {/* 🔥 ЗАГАЛЬНА СУМА */}
            <div className="cart-total">
              <h3>Total: ${totalPrice}</h3>
            </div>

            <button className="checkout-btn">
              Continue Purchase
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
