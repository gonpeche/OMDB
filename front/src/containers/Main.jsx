import React, { Component } from 'react'
import SearchContainer from './SearchContainer'
import { Switch, Route } from 'react-router'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={SearchContainer}/> />
        </Switch>
      </div>
    )
  }
}


