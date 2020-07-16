import React from "react";
import "./styles.css";

function PagesButton(props) {
  return (
    <button
      onClick={(e) => props.onPageClick(e, props.page)}
      className={
        props.currentPage === props.page
          ? "selected-button page-button"
          : "page-button"
      }
    >
      {props.page}
    </button>
  );
}

export default PagesButton;
