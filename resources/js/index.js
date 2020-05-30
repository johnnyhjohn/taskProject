import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
    withRouter,
    useParams
} from "react-router-dom";



ReactDOM.render(
//   <React.StrictMode>
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
