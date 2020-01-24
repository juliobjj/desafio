import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login/index';
import DashBoard from './pages/Dashboard';

const Authenticated = () => {
    return localStorage.getItem('authenticated') || false;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        Authenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }}></Redirect>
            )
    )} />
);

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        Authenticated() ? (
            <Redirect to={{ pathname: '/', state: { from: props.location } }}></Redirect>
        ) : (
                <Component {...props} />
            )
    )} />
);

export default () => (
    <BrowserRouter>
        <Switch>
            <PublicRoute exact path="/" component={Login} />
            <PrivateRoute path="/dashboard" component={DashBoard} />
        </Switch>
    </BrowserRouter>
)

