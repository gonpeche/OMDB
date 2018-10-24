import React from 'react';



export default (props) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Favoritos <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <form onSubmit={props.handleSubmit} className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" name="movies" type="search" placeholder="Search Movie" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    )
  
}

// <nav className="navbar navbar-light bg-light">
// <form onSubmit={props.handleSubmit} className="form-inline">
// <a className="navbar-brand">Elegí tu película</a>
//     <input className="form-control mr-sm-2" name="movies" type="text" placeholder="Search Movies" aria-label="Search"></input>
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Favoritos</button>
//   </form>
// </nav>