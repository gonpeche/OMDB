// import React from 'react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

var card = {
    width: "25%"
}
var img = {
    height: "18rem"
}


export default class Movies extends Component {
    constructor(props){
        super(props)
    }
  render() {
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
                                <span><a href="#" className="badge badge-warning">Marcar como favorito</a></span>
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

// export default ({movies, handleClick}) => {
//     return (
//         <div className="container">
//             <div className="row">
//                 {
//                     movies.movies.length > 0
//                     ?  movies.movies.map(movie => {
//                         return (

//                             <div key={movie.imdbID} className="card" style={card}>
//                                 <img style={img} className="card-img-top" src={movie.Poster}  alt="Card image cap"></img>
//                                 <span><a href="#" class="badge badge-warning">Marcar como favorito</a></span>
//                                 <div className="card-body">
//                                     <h5 className="card-title">{movie.Title}</h5>

//                                         <Link to={`/movie/${movie.imdbID}`}>
//                                             <button className="btn btn-primary" 
//                                             id={movie.imdbID} 
//                                             onClick={(e) => handleClick(e,movie)}> Details 
//                                             </button>
//                                         </Link>
//                                         </div>
//                             </div>

//                         )
//                     })
//                     : null
//                 }
//             </div>
//         </div>
//         )
// }
