import axios from 'axios';

const receiveMovies = (movies) => ({
    type: 'RECEIVE_MOVIES',
    movies,
});

export const fetchMovies = (movieSearch) => (dispatch) => {
    // console.log(movieSearch);    
    axios.get('https://www.omdbapi.com/?apikey=20dac387&s='+movieSearch)
    .then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies["Search"])));
}