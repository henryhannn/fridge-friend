import axios from "axios";

// get all of a user's fridges
export const fetchFridges = (userId) => {
  return axios.get(`/api/fridges/user/${userId}`);
};