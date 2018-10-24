import React, { Component } from 'react'
import axios from 'axios'

export default class Movie extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieId: this.props.match.params.id,
            selectedMovie: {}
        }
    }

    componentDidMount() {
        axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${this.state.movieId}`)
        .then(res => res.data)
        .then(movie => this.setState({
            selectedMovie:movie
        }))
    }

    render() {
        const { selectedMovie } = this.state
        return (
            <div>
            {console.log(selectedMovie)}
            </div>
        )
        }
}
