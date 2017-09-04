/** **********************************************
 * Add all reducers to this file for combine it. *
 *************************************************/

import { combineReducers } from 'redux';

import App from './containers/reducers';

const rootReducer = combineReducers({
    App
});

export default rootReducer;
