import { RECEIVE_MOVIES, RECEIVE_FAVOURITES } from "../constants/action-types";

const initialState = {
  movies: [],
  favourites: []
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {

    case RECEIVE_MOVIES:
    return Object.assign({}, state, {movies: action.movies})

    case RECEIVE_FAVOURITES:
    return Object.assign({}, state, {favourites: [...state.favourites, action.movies]})

    default:
      return state;
  }
};

export default moviesReducer;
