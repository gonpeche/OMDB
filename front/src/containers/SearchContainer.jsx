import React, { Component } from 'react'
import FilterInput from '../components/FilterInput'
import Movies from '../components/Movies'
import axios from 'axios'

export default class SearchContainer extends Component {
    constructor() {
        super()
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
        axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${movie}`)
        .then(res => res.data)
        .then(res => {
            this.setState({
                search: res['Search']
            })
        })
    }

    handleClick(event) {
        this.setState({
            movieID: event.target.id
        })
    }

    render() {
        return (
            <div >
                <FilterInput handleSubmit={this.handleSubmit} />
                <Movies 
                    movies={this.state.search}
                    handleClick={this.handleClick}
                    movieID={this.state.movieID}
                />
            </div>
        )
    }
}


