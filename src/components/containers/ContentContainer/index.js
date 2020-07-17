import React from "react";
import "./styles.css";

import { setCurrentGiphys } from "../../../actions";
import { connect } from "react-redux";

import GiphyComponent from "../../GiphyComponent";
import PagesButton from "../../PagesButton";

function ContentContainer(props) {
  const onPageClick = (e, page) => {
    e.preventDefault();
    props.setCurrentGiphys(page);
    window.scroll(0, 0);
  };

  const renderGiphys =
    props.renderItems.length === 0 ? (
      <p className="display-message">{props.noDisplayMessage}</p>
    ) : props.favorite ? (
      props.renderItems.map((giphy, i) => (
        <GiphyComponent key={i} giphy={giphy} favorite={true} />
      ))
    ) : (
      props.renderItems.map((giphy, i) => (
        <GiphyComponent key={i} giphy={giphy} />
      ))
    );

  const pagesArray = [0, 29, 59, 89, 119, 149, 179, 209, 239, 269];

  const renderPages = props.favorite
    ? props.renderItems
      ? props.renderItems.map((giphy, i) =>
          pagesArray.includes(i) ? (
            <PagesButton
              onPageClick={onPageClick}
              key={i}
              currentPage={props.page}
              page={Math.ceil((i + 2) / 30)}
            />
          ) : null
        )
      : null
    : props.giphys
    ? props.giphys.map((giphy, i) =>
        pagesArray.includes(i) ? (
          <PagesButton
            onPageClick={onPageClick}
            key={i}
            currentPage={props.page}
            page={Math.ceil((i + 2) / 30)}
          />
        ) : null
      )
    : null;

  return (
    <div className="main-container">
      <div className="giphy-container">{renderGiphys}</div>
      <div className="button-container">{renderPages}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  giphys: state.giphys,
  currentGiphys: state.currentGiphys,
  page: state.page,
});

export default connect(mapStateToProps, { setCurrentGiphys })(ContentContainer);
