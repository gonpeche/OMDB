import React, { Component } from 'react'

export default class FilterableMovieContainer extends Component {
  render() {
    return (
      <form style={{marginTop: '20px'}}>
        <input
          placeholder="Search Movie"   
        />
      </form>
    )
  }
}
