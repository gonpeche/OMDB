import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios';

var card = { width: "22%", margin: "1%"}
var img = {height: "18rem"}

const mapStateToProps = (state, ownProps) => {
    return { 
        favourites: state.movies
    }; 
};

console.log('bam')
class Favourites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaFavoritos: []
        }
    }

    componentDidMount() {
        console.log('entre')
        axios.get('/favourites/find')
        .then(res => res.data)
        .then(favoritos => {
            this.setState({
                listaFavoritos: favoritos
            })
        })

    }

    render() {
        const { favourites } = this.props
        const { listaFavoritos } = this.state
            return (
            <div className="container">
                <div className="row">
                {
                    // favourites.favourites.length > 0
                    // ?  favourites.favourites.map(movie => {
                    //     return (
                    //         <div key={movie.imdbID} className="card" style={card}>
                    //             <img style={img} className="card-img-top" src={movie.Poster}  alt="Card image cap"></img>

                    //             <span><a onClick={(e) => this.handleClick(e, movie)} href="#" className="badge badge-warning">Marcar como favorito</a></span>
                            
                    //             <div className="card-body">
                    //                 <h5 className="card-title">{movie.Title}</h5>
                    //                     <Link to={`/movie/${movie.imdbID}`}>
                    //                         <button className="btn btn-primary" id={movie.imdbID}>Details</button>
                    //                     </Link>
                    //             </div>
                    //         </div>
                    //     )
                    // })
                    // : null
                    listaFavoritos.length > 0
                    ?  listaFavoritos.map(movie => {
                        return (
                            <div key={movie.imdbID} className="card" style={card}>
                                <img style={img} className="card-img-top" src={movie.Poster}  alt="Card image cap"></img>

                                <span><a onClick={(e) => this.handleClick(e, movie)} href="#" className="badge badge-warning">Marcar como favorito</a></span>
                            
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

export default connect(mapStateToProps, null)(Favourites);

