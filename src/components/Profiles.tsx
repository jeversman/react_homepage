// import * as React from 'react';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {NavigationDrawer} from './NavigationBar';
import {Profile} from './Profile';
// import * as actions from './../actions';

class ProfilesComponent extends Component {
    render() {
        return (
            <div>
                <NavigationDrawer/>
                <h1> Profiles Screen! </h1>

                {
                    this.props.profiles.map(function(profile) {
                        return <Profile {...profile} />
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('MAP MAP MAP');
    console.log(state);

    return {
        profiles: state.myReducer.profiles
    };
}

export const Profiles = connect(
    mapStateToProps
)(ProfilesComponent);