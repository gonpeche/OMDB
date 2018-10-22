const initialState = {
    albums: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_ALBUMS':
      return Object.assign({}, state, { list: action.albums });
    default:
      return state;
  }
}