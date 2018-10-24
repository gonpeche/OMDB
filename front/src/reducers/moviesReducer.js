import { RECEIVE_MOVIES } from "../constants/action-types";

const initialState = {
  movies: []
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
    return Object.assign({}, state, {movies: action.movies})
    default:
      return state;
  }
};

export default moviesReducer;
