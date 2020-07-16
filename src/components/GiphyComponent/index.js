import React from "react";
import "./styles.css";

import { addToFavorites } from "../../actions";
import { connect } from "react-redux";

function GiphyComponent({ giphy }) {
  const onImageClick = () => {
    console.log(giphy);
  };

  return (
    <div className="card">
      <img
        onClick={onImageClick}
        className="giphy-image"
        src={giphy.images.original.url}
        alt="thing"
      ></img>
      <div className="card-title">{giphy.title}</div>
    </div>
  );
}

export default connect(undefined, { addToFavorites })(GiphyComponent);
