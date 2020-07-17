import React from "react";
import "./styles.css";

import { addToFavorites, removeFromFavorites } from "../../actions";
import { connect } from "react-redux";

import star from "./star.png";
import yellowStar from "./yellow-star.png";
import deleteButton from "./delete.png";

function GiphyComponent({
  giphy,
  favoriteGiphys,
  addToFavorites,
  removeFromFavorites,
  favorite,
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
        return;
      } else {
        addToFavorites(giphy);
      }
    } else {
      addToFavorites(giphy);
    }
  };

  const onDeleteClick = () => {
    removeFromFavorites(giphy);
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

  const renderBin = favorite ? (
    <img
      onClick={onDeleteClick}
      className="delete"
      src={deleteButton}
      alt="delete"
    ></img>
  ) : null;

  return (
    <div className={`card`}>
      <img
        onClick={onImageClick}
        className="giphy-image"
        src={giphy.images.original.url}
        alt={giphy.title}
      ></img>
      <div className="card-title">{giphy.title}</div>
      <div className="icon-container">
        <img
          className="star"
          src={checkForFavorites() === "favorite" ? yellowStar : star}
          alt="star"
        ></img>
        {renderBin}
      </div>
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
