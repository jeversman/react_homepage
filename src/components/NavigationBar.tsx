import React, {Component, PropTypes} from 'react';
import {AppBar, Menu, MenuItem, Paper, Drawer} from 'material-ui';

export class NavigationDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        return (
            <div>
                <AppBar
                    title="PGen"
                    onClick={this.toggleDrawer}
                />
                <Drawer open={this.state.open}>
                    <MenuItem onClick={() => this.handleMenuItemClick(this, 'NewProfile')}> New Profile </MenuItem>
                    <MenuItem onClick={() => this.handleMenuItemClick(this, 'Profiles')}> Profiles </MenuItem>
                </Drawer>
            </div>
        );
    }

    toggleDrawer = () => this.setState({open: !this.state.open});

    handleMenuItemClick(e, link) {
        this.toggleDrawer();
        this.context.router.push('/' + link);
    }
}

NavigationDrawer.contextTypes = {
    router: PropTypes.object.isRequired
};