import React, { Component } from 'react'
import SearchContainer from './SearchContainer'
import { Switch, Route } from 'react-router'
import Movie from '../components/Movie'

export default class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SearchContainer}/> />
          <Route path="/movie/:id" component={Movie}/> />
        </Switch>
      </div>
    )
  }
}


