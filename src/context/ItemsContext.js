import React, { createContext, useContext, useState, useEffect } from "react";
import { getAllRooms, getRoomById } from "../api/itemsApi";

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);


  const loadItems = async () => {
    try {
      setLoadingItems(true);
      const response = await getAllRooms(); 
      setItems(response.data);
    } catch (error) {
      console.error("Error loading rooms:", error);
    } finally {
      setLoadingItems(false);
    }
  };


  const loadRoomById = async (id) => {
    try {
      const response = await getRoomById(id);
      return response.data;
    } catch (error) {
      console.error("Error loading room:", error);
      return null;
    }
  };


  useEffect(() => {
    loadItems();
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        items,
        loadingItems,
        loadItems,
        loadRoomById
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => useContext(ItemsContext);
