import React from "react";

import { connect } from "react-redux";
import { searchGiphy } from "../actions";

import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import ContentContainer from "../components/containers/ContentContainer";

function Homepage(props) {
  const onSearchGiphy = (e, input) => {
    e.preventDefault();
    props.searchGiphy(input);
  };

  return (
    <>
      <Header headerText="Giphy Lookup" />
      <Searchbar onSearchGiphy={onSearchGiphy} />
      <ContentContainer
        renderItems={props.currentGiphys}
        noDisplayMessage="Nothing to Display! Start a new Search!"
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  giphys: state.giphys,
  currentGiphys: state.currentGiphys,
});

export default connect(mapStateToProps, { searchGiphy })(Homepage);
