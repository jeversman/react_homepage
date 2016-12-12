import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import mainReducer from './reducers/reducer';

import App from './App';

const reducers = {
    mainReducer : mainReducer,
    form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

// ReactDOM.render(
//     <Provider store={store}>
//         <MuiThemeProvider>
//             <App/>
//         </MuiThemeProvider>
//     </Provider>,
//     document.getElementById('app')
// );

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);

import {Ice} from 'ice';
var PGen = require("./../for_cypress/src/PGen.ice").PGen;

var ic;

Ice.Promise.try(
    function()
    {
        ic = Ice.initialize();
        var base = ic.stringToProxy("SimplePrinter:default -p 8080");
        return PGen.ProfileDBPrx.checkedCast(base).then(
            function()
            {
                console.log('HEY HEY HEY HEY');
            });
    }
).finally(
    function()
    {
        if(ic)
        {
            return ic.destroy();
        }
    }
).exception(
    function(ex)
    {
        console.log(ex.toString());
        process.exit(1);
    });

