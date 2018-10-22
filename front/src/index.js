const React = require('react');
const ReactDOM = require('react-dom');
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './containers/Main';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Main} />
    </BrowserRouter>
    , document.getElementById("app"))