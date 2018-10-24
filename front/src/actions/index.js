import axios from 'axios';

const receiveMovies = movies => ({
    type: "RECEIVE_MOVIES",
    movies
});

export const setFavourite = movies => ({
  type: "RECEIVE_FAVOURITES",
  movies
})

export const fetchMovies = (moviesSearch) => (dispatch) => {
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${moviesSearch}`)
  .then(res => res.data)
  // .then(res => console.log(res))
  .then(movies => dispatch(receiveMovies(movies["Search"])))    
}

