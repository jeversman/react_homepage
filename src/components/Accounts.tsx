import React, {Component} from 'react';
import {connect} from 'react-redux';

import {NavigationBar} from './NavigationBar';
import {Account} from './Account';
import * as actions from './../actions';

export class AccountsComponent extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <h2> Accounts! </h2>

                {
                    this.props.accounts.map((account) => {
                        return <Account
                            profiles={this.props.profiles}
                            {...account}
                            addProfile={this.props.addProfileToAccount}
                        />
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.mainReducer.accounts,
        profiles: state.mainReducer.profiles
    };
}

export const Accounts = connect(
    mapStateToProps,
    actions
)(AccountsComponent);