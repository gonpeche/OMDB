import axios from 'axios';

const receiveMovies = movies => ({
    type: "RECEIVE_MOVIES",
    movies
});

const setFavourite = movies => ({
  type: "RECEIVE_FAVOURITES",
  movies
})

export const fetchMovies = (moviesSearch) => (dispatch) => {
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${moviesSearch}`)
  .then(res => res.data)
  // .then(res => console.log(res))
  .then(movies => dispatch(receiveMovies(movies["Search"])))    
}

export const storeFavourite = (favourite) => (dispatch) => {
  console.log('storeFav')
  axios.post('/favourites/new', favourite)
  .then( res => res.data)
  .then( movie => dispatch(setFavourite(movie)))

}
