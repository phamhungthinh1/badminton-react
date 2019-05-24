import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home/Home';

class RouteService extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={ Home }/>
                </Switch>
            </BrowserRouter>
        )
    }
}  