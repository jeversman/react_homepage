import React, {Component} from 'react';
import {Router, Route, hashHistory, Redirect} from 'react-router';

import {NewProfile} from "./components/NewProfile";
import {Profiles} from "./components/Profiles";
import {Accounts} from "./components/Accounts";

export default class App extends Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path="/NewProfile" component={NewProfile}></Route>
                    <Route path="/Profiles" component={Profiles}></Route>
                    <Route path="/Accounts" component={Accounts}></Route>
                    <Redirect from="/" to="/Profiles"/>
                </Router>
            </div>
        );
    }
}