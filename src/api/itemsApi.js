import axios from "axios";

const API_URL = "http://localhost:8000/rooms";

export const getAllRooms = () => axios.get(API_URL);

export const getRoomsWithFilters = async ({ search, type }) => {
  const params = {};

  if (search && search.trim() !== "") {
    params["name_like"] = search;
  }

  if (type && type !== "all") {
    params["type"] = type;
  }

  return axios.get(API_URL, { params });
};

export const getRoomById = (id) => axios.get(`${API_URL}/${id}`);
