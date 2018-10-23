import React from 'react'

export default (props) => {
    return (
            <div>
                {
                    props.movies.length > 0
                    ?  props.movies.map(function(movie) {
                        return (
                            <div key={movie.imdbID}>
                                <img src={movie.Poster} height="150" width="100"></img>
                                <li>{movie.Title}</li>
                                <li>Año: {movie.Year}</li>
                            </div>
                        )
                    })
                    : <h1>Elegí la película</h1>
                }
            </div>
        )
}
