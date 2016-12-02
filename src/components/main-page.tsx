import * as React from 'react';
import {Component, PropTypes} from 'react';

import {NavigationDrawer} from './NavigationBar'

export class MainPage extends Component {

    render() {
        return (
            <div>
                <NavigationDrawer/>
                <h1> Home Page! </h1>
            </div>
        );
    }
}

MainPage.contextTypes = {
    router: PropTypes.object.isRequired
};