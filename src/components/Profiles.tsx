import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {NavigationBar} from './NavigationBar';
import {Profile} from './Profile';

class ProfilesComponent extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
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