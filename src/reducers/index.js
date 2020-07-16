const defaultState = {
  giphys: [],
  favorite: [],
  currentGiphys: [],
  page: 1,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "RECEIVE_GIPHY_DATA":
      return {
        giphys: action.data.data,
        favorite: state.favorite,
        currentGiphys: action.data.data.slice(0, 30),
        page: state.page,
      };
    case "SET_CURRENT_GIPHYS":
      return {
        giphys: state.giphys,
        favorite: state.favorite,
        currentGiphys: state.giphys.slice(
          (action.page - 1) * 30,
          (action.page - 1) * 30 + 30
        ),
        page: action.page,
      };
    case "ADD_TO_FAVORITES":
      return {
        gipys: state.giphys,
        favorite: [...state.favorite, action.data],
        currentGiphys: state.currentGiphys,
        page: state.page,
      };
    default:
      return state;
  }
};

export default reducer;
