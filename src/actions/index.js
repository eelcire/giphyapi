import axios from "axios";
import { BASE_URL, LIMIT, PUBLIC_KEY } from "../api.js";

export const receiveGiphyData = (data) => ({
  type: "RECEIVE_GIPHY_DATA",
  data,
});

export const setCurrentGiphys = (page) => ({
  type: "SET_CURRENT_GIPHYS",
  page,
});

export const addToFavorites = (data) => ({
  type: "ADD_TO_FAVORITES",
  data,
});

export const removeFromFavorites = (data) => ({
  type: "REMOVE_FROM_FAVORITES",
  data,
});

export const setFavorites = (data) => ({
  type: "SET_FAVORITES",
  data,
});

export const searchGiphy = (input) => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}api_key=${PUBLIC_KEY}&q=${input}&limit=${LIMIT}`)
      .then(({ data }) => {
        dispatch(receiveGiphyData(data));
      })
      .catch((err) => console.error(err));
  };
};
