import axios from "axios";
import { BASE_URL, LIMIT, PUBLIC_KEY } from "../api.js";

export const receiveGiphyData = (data) => ({
  type: "RECEIVE_GIPHY_DATA",
  data,
});

export const searchGiphy = (input) => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}q=${input}&limit=${LIMIT}&api_key=${PUBLIC_KEY}`)
      .then(({ data }) => dispatch(receiveGiphyData(data)));
  };
};
