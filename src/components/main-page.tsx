import * as React from 'react';
import {Component, PropTypes} from 'react';

import {NavigationBar} from './NavigationBar'

export class MainPage extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <h1> Home Page! </h1>
            </div>
        );
    }
}

MainPage.contextTypes = {
    router: PropTypes.object.isRequired
};