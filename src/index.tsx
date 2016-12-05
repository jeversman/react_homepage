import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import myReducer from './reducers/reducer';

import App from './App';

const reducers = {
    myReducer: myReducer ,
    form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);

