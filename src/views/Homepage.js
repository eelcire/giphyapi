import React from "react";

import { connect } from "react-redux";
import { searchGiphy } from "../actions";

import Searchbar from "../components/Searchbar";
import ContentContainer from "../components/containers/ContentContainer";

function Homepage(props) {
  const onSearchGiphy = (e, input) => {
    e.preventDefault();
    props.searchGiphy(input);
  };

  return (
    <>
      <Searchbar onSearchGiphy={onSearchGiphy} />
      <ContentContainer />
    </>
  );
}

const mapStateToProps = (state) => ({
  giphys: state.giphys,
});

export default connect(mapStateToProps, { searchGiphy })(Homepage);
