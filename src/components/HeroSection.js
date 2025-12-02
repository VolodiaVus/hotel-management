import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const HeroSection = () => {
  return (
    <section className="hero-container">

      <div className="hero-left">
        <h2>Welcome to Paradise Hotel</h2>
        <p>
          Book your dream room today and enjoy luxury at its finest.
        </p>

        <Link to="/catalog">
          <button className="primary-btn">Explore Rooms</button>
        </Link>
      </div>

      <div className="hero-right">
        <img src="https://i.obozrevatel.com/news/2024/11/7/151880086.jpg?size=1944x924" alt="Hotel" />
      </div>

    </section>
  );
};

export default HeroSection;

