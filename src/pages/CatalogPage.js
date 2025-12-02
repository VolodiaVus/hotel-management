import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoomCard from "../components/RoomCard";
import "../App.css";
import { getAllRooms } from "../api/itemsApi";

const CatalogPage = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    const loadRooms = async () => {
      try {
        setLoading(true);
        const response = await getAllRooms();
        setRooms(response.data); 
        setFilteredRooms(response.data); 
      } catch (error) {
        console.error("Error loading rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRooms();
  }, []);

  useEffect(() => {
    let result = [...rooms];

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();

      result = result.filter(room =>
        room.name.toLowerCase().includes(query) ||
        room.description.toLowerCase().includes(query)
      );
    }

    if (filterType !== "all") {
      result = result.filter(room => room.type === filterType);
    }

    setFilteredRooms(result);
  }, [searchQuery, filterType, rooms]);

  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <Navigation />

        <div className="catalog-page">
          <h2>Available Rooms</h2>

          <div className="catalog-filters">
            <input
              type="text"
              placeholder="Search rooms..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />

            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
            >
              <option value="all">All</option>
              <option value="suite">Suite</option>
              <option value="family">Family</option>
              <option value="standard">Standard</option>
            </select>
          </div>

          {loading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="catalog-grid">
              {filteredRooms.length > 0 ? (
                filteredRooms.map(room => (
                  <RoomCard key={room.id} room={room} />
                ))
              ) : (
                <p>No rooms found</p>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CatalogPage;
