import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} />
      <h3>{room.name}</h3>
      <p>Price: {room.price}</p>

      <Link to={`/item/${room.id}`}>
        <button className="primary-btn">View more</button>
      </Link>
    </div>
  );
};

export default RoomCard;
