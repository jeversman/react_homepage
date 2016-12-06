import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {NavigationBar} from './NavigationBar';
import {Profile} from './Profile';

class ProfilesComponent extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <h2> Profiles Screen! </h2>

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
    return {
        profiles: state.mainReducer.profiles
    };
}

export const Profiles = connect(
    mapStateToProps
)(ProfilesComponent);