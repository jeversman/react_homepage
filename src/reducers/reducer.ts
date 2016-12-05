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

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_PROFILE":
            var newState = addProfile(state, action.profile);
            return newState;
        default:
            console.log('unknown action type in reducer');
            return state;
    }
}