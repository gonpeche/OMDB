import React from 'react'
import { Link } from 'react-router-dom'

var card = {
    width: "25%"
}
var img = {
    height: "18rem"
}

export default (props) => {
    let handleClick = props.handleClick
    return (
        <div className="container">
            <div className="row">
                {
                    props.movies.length > 0
                    ?  props.movies.map(function(movie) {
                        return (
                            <div key={movie.imdbID} className="card" style={card}>
                                <img style={img} className="card-img-top" src={movie.Poster}  alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.Title}</h5>
                                        <Link to={`/movie/${movie.imdbID}`}>
                                            <button className="btn btn-primary" id={movie.imdbID} onClick={handleClick}> Go somewhere </button>
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

