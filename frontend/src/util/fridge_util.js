import axios from "axios";

// get all of a user's fridges
export const fetchFridges = (userId) => {
  return axios.get(`/api/fridges/user/${userId}`);
};

export const createFridge = (userId, name) => {
  return axios.post('api/fridges', { userId, name });
};