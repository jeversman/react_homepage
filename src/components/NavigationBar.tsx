import * as React from 'react';
import {Component, PropTypes} from 'react';

import {RaisedButton} from 'material-ui';

export class NavigationBar extends Component {

    render() {
        return (
            <div>
                <RaisedButton style={{margin: '5px'}} onClick={() => this.handleClick(this, 'NewProfile')}> New Profile </RaisedButton>
                <RaisedButton style={{margin: '5px'}} onClick={() => this.handleClick(this, 'Profiles')}> Profiles </RaisedButton>
            </div>
        );
    }

    handleClick(e, link) {
        console.log(link + "  CLICKED");
        this.context.router.push('/' + link);
    }
}

NavigationBar.contextTypes = {
    router: PropTypes.object.isRequired
};