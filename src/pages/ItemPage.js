import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { getRoomById } from "../api/itemsApi"; 
import "../App.css";

const ItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const response = await getRoomById(id);
        setRoom(response.data);
      } catch (error) {
        console.error("Error loading room:", error);
        setRoom(null);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (!room) {
    return <h2 style={{ textAlign: "center" }}>Room not found</h2>;
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <Navigation />

        <div className="item-page">
          <div className="item-image-block">
            <img 
              src={room.image} 
              alt={room.name} 
              className="item-image"
            />
          </div>

          <div className="item-info-block">
            <h2>{room.name}</h2>
            <p className="item-description">{room.description}</p>

            <p className="item-price">
              <strong>Price: </strong>${room.price}
            </p>

            <div className="item-buttons">
              <button className="back-btn" onClick={() => navigate(-1)}>
                ⬅ Go back
              </button>
              <button className="primary-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemPage;
