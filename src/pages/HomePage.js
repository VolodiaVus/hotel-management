import React, { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const [items] = useState([
    {
      id: 1,
      name: "Ocean View Room",
      description: "Beautiful view of the ocean.",
      image: "https://bakkara-hotel.com.ua/wp-content/uploads/2018/06/MG_4765_hdr-min-1902x1268.jpg"
    },
    {
      id: 2,
      name: "Luxury Suite",
      description: "Premium comfort and elegance.",
      image: "https://alltravelgroup.com.ua/wp-content/uploads/2022/08/%D0%B3%D0%BE%D1%82%D0%B5%D0%BB%D1%96-1024x635.jpg"
    },
    {
      id: 3,
      name: "Family Apartment",
      description: "Perfect for families and groups.",
      image: "https://11mirrors-hotel.com/uploads/thumb/2014-2-485_381_design_hotel5_1.png"
    },
    {
      id: 4,
      name: "Standard Room",
      description: "Affordable comfort room.",
      image: "https://3.imimg.com/data3/IL/XU/MY-8679324/5-star-hotel-room-booking-service-500x500.jpg"
    }
  ]);

  const [visibleCount, setVisibleCount] = useState(2);

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 2); 
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <Navigation />
        <HeroSection />
        <section className="hotel-list">
          <h3>Popular Rooms</h3>

          <div className="hotel-cards">
            {items.slice(0, visibleCount).map(item => (
              <div key={item.id} className="hotel-card">
                <img src={item.image} alt={item.name} className="hotel-image" />
                <h4>{item.name}</h4>
                <p className="hotel-description">{item.description}</p>
              </div>
            ))}
          </div>
          {visibleCount < items.length && (
            <button className="primary-btn" onClick={handleViewMore}>
              View more
            </button>
          )}
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
