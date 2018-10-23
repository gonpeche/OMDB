import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./react-redux/store";
import Main from './containers/Main';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={Main} />
        </BrowserRouter>    
    </Provider>
,document.getElementById("app"))

