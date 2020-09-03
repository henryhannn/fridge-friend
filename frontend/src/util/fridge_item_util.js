import axios from "axios";

export const getFridgeItems = (fridgeId) => {
  return axios.get(`/api/fridges/${fridgeId}`);
};

export const editFridgeItem = (fridgeId, itemData) => {
  return axios.patch(`/api/fridges/${fridgeId}`, itemData);
}