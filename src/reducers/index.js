const defaultState = {
  giphys: [],
  favorite: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "RECEIVE_GIPHY_DATA":
      return { giphys: action.data.data, favorite: [...state.favorite] };
    default:
      return state;
  }
};

export default reducer;
