import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import * as ROUTES from './../constants/routes'
// import Home from './components/Home/Home';
// import Login from './views/Login/Login';
import Task from './../views/Task/Task';
import Project from './../views/Project/Project';
// import NotFound from './views/NotFound/NotFound'
// User is LoggedIn
// import PrivateRoute from './PrivateRoute'
// import Dashboard from './views/user/Dashboard/Dashboard';

const Main = props => (
    <Switch>
        {/*User might LogIn*/}
        <Route exact path={ROUTES.TASK} component={Task}/>
        <Route path={ROUTES.PROJECT} component={Project}/>
        {/*User will LogIn*/}
        {/* <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/> */}
        {/* User is LoggedIn*/}
        {/* <PrivateRoute path='/dashboard' component={Dashboard}/> */}
        {/*Page Not Found*/}
        {/* <Route component={NotFound}/> */}
    </Switch>
);
export default Main;