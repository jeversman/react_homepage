import * as React from 'react';
import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {NavigationBar} from './NavigationBar';
// import * as actions from './../actions';

class ProfilesComponent extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <h1> Profiles Screen! </h1>

                <ul>
                    {
                        this.props.profiles.map(function (profile) {
                            <li> sdfsdfsdf </li>
                        })
                    }
                </ul>
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