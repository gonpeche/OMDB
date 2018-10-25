import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { setFavourite } from '../actions/index'

var card = { width: "22%", margin: "1%"}
var img = {height: "18rem"}

// const mapDispatchToProps = dispatch => {
//     return {
//         setFavourite: favouriteMovie => dispatch(setFavourite(favouriteMovie))
//     };
// };

const mapStateToProps = (state, ownProps) => {
    return { favourites: state.movies }; // Por que MOVIES y no FAVOURITES?
};



class Favourites extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e, movie) {
        this.props.setFavourite(movie)
    }
    
    render() {
        const { favourites } = this.props
        // console.log(this.props.favourites)
        console.log(favourites)
            return (
            <div className="container">
                <div className="row">
                {
                    favourites.favourites.length > 0
                    ?  favourites.favourites.map(movie => {
                        return (
                            <div key={movie.imdbID} className="card" style={card}>
                                <img style={img} className="card-img-top" src={movie.Poster}  alt="Card image cap"></img>

                                <span><a 
                                onClick={(e) => this.handleClick(e, movie)} 
                                href="#" 
                                className="badge badge-warning">Marcar como favorito
                                </a></span>
                            

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

