const React = require('react');
const ReactDOM = require('react-dom');
import { BrowserRouter, Route } from 'react-router'
import Main from './containers/Main.js';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Main} />
    </BrowserRouter>
    , document.getElementById("app"))