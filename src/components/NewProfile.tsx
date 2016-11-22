import * as React from 'react';
import {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {NavigationBar} from './NavigationBar';
import NewProfileForm from './NewProfileForm';

import * as actions from './../actions';

class NewProfileComponent extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <h1> New Profile Screen! </h1>

                <NewProfileForm onSubmit={this.props.addProfile} />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export const NewProfile = connect(
    mapStateToProps,
    actions
)(NewProfileComponent);

