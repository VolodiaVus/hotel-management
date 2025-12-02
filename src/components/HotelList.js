import React from "react";

const hotels = [
  { 
    id: 1, 
    name: "Ocean View Room", 
    description: "Experience calmness and comfort with a breathtaking view of the ocean. Perfect for couples or solo travelers.",
    image: "https://bakkara-hotel.com.ua/wp-content/uploads/2018/06/MG_4765_hdr-min-1902x1268.jpg"
  },
  { 
    id: 2, 
    name: "Luxury Suite", 
    description: "Indulge in ultimate comfort in our spacious Luxury Suite, designed for guests who appreciate premium living.",
    image: "https://alltravelgroup.com.ua/wp-content/uploads/2022/08/%D0%B3%D0%BE%D1%82%D0%B5%D0%BB%D1%96-1024x635.jpg"
  },
  { 
    id: 3, 
    name: "Family Apartment", 
    description: "A perfect choice for families or groups, offering extra space and a cozy atmosphere to feel at home.",
    image: "https://11mirrors-hotel.com/uploads/thumb/2014-2-485_381_design_hotel5_1.png"
  }
];

const HotelList = () => {
  return (
    <section className="hotel-list">
      <h3>Popular Rooms</h3>
      <div className="hotel-cards">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img 
              src={hotel.image} 
              alt={hotel.name} 
              className="hotel-image"
            />
            <h4>{hotel.name}</h4>
            <p className="hotel-description">{hotel.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelList;
