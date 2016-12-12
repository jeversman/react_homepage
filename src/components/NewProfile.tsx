import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {NavigationBar} from './NavigationBar';
import NewProfileForm from './NewProfileForm';

import * as actions from './../actions';

import param from './test.json';

class NewProfileComponent extends Component {

    data: any = {params: [
        {name: 'name', type: 'text', description: 'Name'},
        {name: 'param1', type: 'number', description: 'first parameter'},
        {name: 'param2', type: 'number', description: 'second parameter'}
    ]};

    render() {
        return (
            <div>
                <NavigationBar/>
                <h2> New Profile Screen! </h2>
    
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

