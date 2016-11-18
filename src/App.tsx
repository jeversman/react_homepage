import * as React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';

import {MainPage} from './components/main-page';
import {FirstScreen} from "./components/FirstScreen";
import {SecondScreen} from "./components/SecondScreen";

const Links = () =>
    <nav>
        <Link to="/FirstScreen"> First </Link>
        <Link to="/SecondScreen"> Second </Link>
    </nav>

export class App extends React.Component {
    render() {
        return (
            <div>
                <Links/>
                <Router history={hashHistory}>
                    <Route path="/" component={MainPage}></Route>
                    <Route path="/FirstScreen" component={FirstScreen}></Route>
                    <Route path="/SecondScreen" component={SecondScreen}></Route>
                </Router>
            </div>
        );
    }
}