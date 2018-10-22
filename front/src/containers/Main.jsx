import React, { Component } from 'react'
import FilterableMovieContainer from './FilterableMovieContainer';
import Movies from '../components/Movies'
import Sidebar from '../containers/Sidebar'

export default class Main extends Component {
  render() {
    return (
      <div>
          <Sidebar />
          <FilterableMovieContainer />
          <Movies />
      </div>
    )
  }
}

