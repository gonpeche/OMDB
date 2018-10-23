import React from 'react';



export default (props) => {
    return (
      <nav className="navbar navbar-light bg-light">
      <form onSubmit={props.handleSubmit} className="form-inline">
      <a className="navbar-brand">Elegí tu película</a>
          <input className="form-control mr-sm-2" name="movies" type="text" placeholder="Search Movies" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  
}

