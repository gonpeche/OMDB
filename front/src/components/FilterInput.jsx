import React from 'react';

export default (props) => {
    return (
      <form onSubmit={props.handleSubmit} style={{marginTop: '20px'}}>
        <input type="text" name="movies" placeholder="Search Movie" />
      </form>
    )
  
}
