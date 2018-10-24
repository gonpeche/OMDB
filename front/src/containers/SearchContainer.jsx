import React, { Component } from 'react'
import FilterInput from '../components/FilterInput'
import Movies from '../components/Movies'
import axios from 'axios'

import { connect } from "react-redux";
import { fetchMovies } from "../actions/index";


const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: moviesSearch => dispatch(fetchMovies(moviesSearch))
    };
};

const mapStateToProps = (state, ownProps) => {
    return { movies: state.movies }; // si o si lo q esta en movieReducer
};
  
class SearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: [],
            movieID: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        let movie = event.target.movies.value
        this.props.fetchMovies(movie)        
    }
    
    
    handleClick(event, movie) { // REDUXARLO TAMBIEN
        this.setState({
            movieID: event.target.id
        })
    }

    render() {
        return (
            <div >
                <FilterInput handleSubmit={this.handleSubmit} />

                <Movies 
                    movies={this.props.movies}
                    handleClick={this.handleClick}
                    // movieID={this.state.movieID}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);




