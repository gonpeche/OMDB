import React from 'react'

var card = {
    width: "18rem"
}
var img = {
    height: "18rem"
}

// var img = {
//     height: 
// }

export default (props) => {
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
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>




                        )
                    })
                    : <h1>Elegí la película</h1>
                }
            </div>
        </div>
        )
}

