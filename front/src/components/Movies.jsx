import React from 'react'

export default (props) => {
    return (
        <div>
        {
            props.movies.map(function(movie) {
                return (
                    <div>
                    <li key={movie.imdbID}>{movie.Title}</li>
                    <h1>Hola</h1>
                    
                    </div>
                )
            })
        }
        </div>
    )
}


