import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../components/CartButton";
import "../App.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Rooms</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* Cart Button moved into nav */}
        <li>
          <CartButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
