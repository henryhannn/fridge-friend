import axios from "axios";

// get index of all fridges
export const fetchFridges = () => {
  return axios.get("/api/fridges");
};