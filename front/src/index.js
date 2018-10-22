// const React = require('react');
// const ReactDOM = require('react-dom');
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './containers/Main';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Main} />
    </BrowserRouter>
    , document.getElementById("app"))


    
    // import { Provider } from "react-redux";
    // import store from "./store";
    
    // import App from "./App";
    
    // const rootElement = document.getElementById("root");
    // ReactDOM.render(
    //   <Provider store={store}>
    //     <App />
    //   </Provider>,
    //   rootElement
    // );