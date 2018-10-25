import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { storeFavourite } from '../actions/index'
import axios from 'axios'

var card = { width: "22%", margin: "1%"}
var img = {height: "18rem"}

const mapDispatchToProps = dispatch => {
    return {
        storeFavourite: movie => dispatch(storeFavourite(movie))
    };
};

const mapStateToProps = (state, ownProps) => {
    return { 
        favourites: state.favourites,
        movies: state.movies
    }; // si o si lo q esta en movieReducer
};

class Movies extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e, movie) {
        this.props.storeFavourite(movie)
    }
    
    render() {
        console.log(this.props)
      const { movies } = this.props
        return (
            <div className="container">
                <div className="row">
                    {
                        movies.movies.length > 0
                        ?  movies.movies.map(movie => {
                            return (
                                <div key={movie.imdbID} className="card" style={card}>
                                    <img style={img} className="card-img-top" src={movie.Poster}  alt="Card image cap"></img>

                                    <span><button 
                                    onClick={(e) => this.handleClick(e, movie)} 
                                    href="#" 
                                    className="badge badge-warning">Marcar como favorito
                                    </button></span>



                                    <div className="card-body">
                                        <h5 className="card-title">{movie.Title}</h5>
                                            <Link to={`/movie/${movie.imdbID}`}>
                                                <button className="btn btn-primary" id={movie.imdbID}>Details</button>
                                            </Link>
                                    </div>
                                </div>
                            )
                        })
                        : null
                    }
                </div>
            </div>
        )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

