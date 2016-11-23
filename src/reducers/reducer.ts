const initialState = {
    profiles: [{name: 'wew', param1: 1}]
}

function addProfile(state, profile) {
    console.log(profile);

    var newState = state;
    newState.profiles = newState.profiles.concat(profile);
    return newState;
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_PROFILE":
            console.log('ADD profile in reducer');

            var newState = addProfile(state, action.profile);
            console.log('NEW STATE: ', newState);
            return newState;
        default:
            console.log('unknown action type in reducer');
            return state;
    }
}