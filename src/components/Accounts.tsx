import React, {Component} from 'react';
import {connect} from 'react-redux';

import {NavigationBar} from './NavigationBar';
import {Account} from './Account';

export class AccountsComponent extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <h1> Accounts! </h1>

                {
                    this.props.accounts.map((account) => {
                        return <Account profiles={this.props.profiles} {...account} />
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.myReducer.accounts,
        profiles: state.myReducer.profiles
    };
}

export const Accounts = connect(
    mapStateToProps
)(AccountsComponent);