import {assign} from 'lodash';

const initialState = {
    profiles: [{name: 'wew', param1: 1, param2: 1}],
    accounts: [
        {id: 1, name: 'account 1', profile: 'wew'},
        {id: 2, name: 'account 2', profile: 'none'}
    ]
}

function addProfile(state, profile) {
    var newState = state;
    newState.profiles = newState.profiles.concat(profile);
    return newState;
}

function addProfileToAccount(state, accountId, profileName) {
    var newState = state;
    newState.accounts = newState.accounts.map((account) => {
        return account.id === accountId ?
            assign({}, account, {profile: profileName}) :
            account
    });

    console.log('ACTION IS WORK!!!!!');
    console.log(accountId);
    console.log(profileName);
    return newState;
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_PROFILE":
            var newState = addProfile(state, action.profile);

            console.log('STATE STATE STATE');
            console.log(state);

            return newState;

        case 'ADD_PROFILE_TO_ACCOUNT':
            var newState = addProfileToAccount(state, action.accountId, action.profileName);
            return newState;

        default:
            console.log('unknown action type in reducer');
            return state;
    }
}