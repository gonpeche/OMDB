import FilterInput from '../components/FilterInput'
import Movies from '../components/Movies'
import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchMovies } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: moviesSearch => dispatch(fetchMovies(moviesSearch))
    };
};
  
class SearchContainer extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        let movie = event.target.movies.value
        this.props.fetchMovies(movie)        
    }

    render() {
        return (
            <div>
                <FilterInput handleSubmit={this.handleSubmit}/>
                <Movies/>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(SearchContainer);


