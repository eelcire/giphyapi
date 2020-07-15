import React, { useState } from "react";
import "./styles.css";

function Searchbar(props) {
  const [input, setInput] = useState("");

  const onChangeInput = (input) => {
    setInput(input);
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <form
      onSubmit={(e) => {
        props.onSearchGiphy(e, input);
        clearInput();
      }}
    >
      <input
        placeholder="Find your Giphy!"
        onChange={(e) => onChangeInput(e.target.value)}
        value={input}
      ></input>
      <button>Search!</button>
    </form>
  );
}

export default Searchbar;
