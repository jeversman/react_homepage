import * as React from 'react';
import {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {NavigationDrawer} from './NavigationBar';
import NewProfileForm from './NewProfileForm';

import * as actions from './../actions';

class NewProfileComponent extends Component {

    data: any = {params: [
        {name: 'name', type: 'text', description: 'Name'},
        {name: 'param1', type: 'number', description: 'first parameter'},
        {name: 'param2', type: 'number', description: 'second parameter'}
    ]};

    render() {
        return (
            <div>
                <NavigationDrawer/>
                <h1> New Profile Screen! </h1>
    
                <NewProfileForm onSubmit={this.props.addProfile} {...this.data} />
    
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

