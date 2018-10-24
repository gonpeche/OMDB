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
            selectedMovie: movie
        }))
    }

    render() {
        const { selectedMovie } = this.state
        console.log(selectedMovie)
        var card = {width: "50%", height: "1rem", marginLeft: "25%"}
        var span = {fontWeight: "bold"}
        return (
            <div className="container">
                <div className="card" style={card}>
                <img className="card-img-top" src={selectedMovie.Poster} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{selectedMovie.Title}</h5>
                    <p className="card-text">{selectedMovie.Plot}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span style={span}> Director: </span>{selectedMovie.Director}</li>
                    <li className="list-group-item"><span style={span}> Género: </span>{selectedMovie.Genre}</li>
                    <li className="list-group-item"><span style={span}> Lanzamiento: </span>{selectedMovie.Released}</li>
                    <li className="list-group-item"><span style={span}> Rating: </span>{selectedMovie.imdbRating}</li>
                 </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                </div>
            </div>
            )
        }
}
