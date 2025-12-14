import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartModal from "./CartModal";

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <button className="cart-button" onClick={() => setIsOpen(true)}>
         Cart ({totalQuantity})
      </button>
      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default CartButton;
