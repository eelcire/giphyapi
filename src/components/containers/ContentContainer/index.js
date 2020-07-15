import React, { useState } from "react";
import "./styles.css";

import { connect } from "react-redux";

import GiphyComponent from "../../GiphyComponent";

function ContentContainer(props) {
  const [page, setPage] = useState(1);

  const renderGiphys = props.giphys
    ? props.giphys.map((giphy, i) => <GiphyComponent key={i} giphy={giphy} />)
    : null;

  return <div className="container">{renderGiphys}</div>;
}

const mapStateToProps = (state) => ({
  giphys: state.giphys,
});

export default connect(mapStateToProps)(ContentContainer);
