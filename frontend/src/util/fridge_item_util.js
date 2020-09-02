import axios from "axios";

export const getFridgeItems = (fridgeId) => {
  return axios.get(`/api/fridges/${fridgeId}/fridgeItem`);
};

export const editFridgeItem = (fridgeId, itemData) => {
  return axios.patch(`/api/users/${fridgeId}`, itemData);
}