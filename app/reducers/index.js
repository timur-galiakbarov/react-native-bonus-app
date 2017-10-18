import { combineReducers } from 'redux';
import appData from './dataReducers';
import menu from './menuReducers';

const rootReducer = combineReducers({
    appData: appData,
    menu: menu
});

export default rootReducer;
