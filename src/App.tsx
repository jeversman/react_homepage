import * as React from 'react';
import {Router, Route, hashHistory, Link, Redirect} from 'react-router';

import {NewProfile} from "./components/NewProfile";
import {Profiles} from "./components/Profiles";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path="/NewProfile" component={NewProfile}></Route>
                    <Route path="/Profiles" component={Profiles}></Route>
                    <Redirect from="/" to="/Profiles"/>
                </Router>
            </div>
        );
    }
}