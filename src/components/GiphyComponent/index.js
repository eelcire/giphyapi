import React from "react";
import "./styles.css";

function GiphyComponent({ giphy }) {
  console.log(giphy);
  return <img src={giphy.images.original.url} alt="thing"></img>;
}

export default GiphyComponent;
