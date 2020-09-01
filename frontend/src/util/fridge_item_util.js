import axios from "axios";

// get index of all fridge items
export const getFridgeItems = () => {
  return axios.get("/api/fridge");
};