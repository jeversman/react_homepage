import * as React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';

import {MainPage} from './components/main-page';
import {NewProfile} from "./components/NewProfile";
import {Profiles} from "./components/Profiles";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path='/' component={MainPage}></Route>
                    <Route path="/NewProfile" component={NewProfile}></Route>
                    <Route path="/Profiles" component={Profiles}></Route>
                </Router>
            </div>
        );
    }
}