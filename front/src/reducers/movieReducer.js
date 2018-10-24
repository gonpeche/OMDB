import { RECEIVE_MOVIES } from "../constants/action-types";

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
    console.log(action)
      return [...state, action.payload];
    default:
      return state;
  }
};

export default moviesReducer;
