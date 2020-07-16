import React from "react";
import "./styles.css";

import { addToFavorites, removeFromFavorites } from "../../actions";
import { connect } from "react-redux";

function GiphyComponent({
  giphy,
  favoriteGiphys,
  addToFavorites,
  removeFromFavorites,
}) {
  const onImageClick = () => {
    if (favoriteGiphys.length > 0) {
      let present = false;
      for (let i = 0; i < favoriteGiphys.length; i++) {
        if (favoriteGiphys[i].id === giphy.id) {
          present = true;
        }
      }
      if (present) {
        removeFromFavorites(giphy);
      } else {
        addToFavorites(giphy);
      }
    } else {
      addToFavorites(giphy);
    }
  };

  const checkForFavorites = () => {
    if (favoriteGiphys) {
      for (let item of favoriteGiphys) {
        if (item.id === giphy.id) {
          return "favorite";
        }
      }
    }
  };
  return (
    <div className={`card ${checkForFavorites()}`}>
      <img
        onClick={onImageClick}
        className="giphy-image"
        src={giphy.images.original.url}
        alt={giphy.title}
      ></img>
      <div className="card-title">{giphy.title}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  favoriteGiphys: state.favorite,
});

export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites,
})(GiphyComponent);
