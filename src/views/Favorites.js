import React from "react";

import { connect } from "react-redux";

import Header from "../components/Header";
import ContentContainer from "../components/containers/ContentContainer";

function Favorites(props) {
  return (
    <>
      <Header headerText="Favorites" />
      <ContentContainer
        renderItems={props.favoriteGiphys}
        favorite={true}
        noDisplayMessage="Add and item to Favorites to start your list!"
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  favoriteGiphys: state.favorite,
});

export default connect(mapStateToProps)(Favorites);
