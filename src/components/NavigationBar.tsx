import * as React from 'react';
import {Component, PropTypes} from 'react';

export class NavigationBar extends Component {

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick(this, 'NewProfile')}> New Profile </button>
                <button onClick={() => this.handleClick(this, 'Profiles')}> Profiles </button>
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