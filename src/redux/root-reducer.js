


import {combineReducer} from 'redux';

import userReducer from './userReducer';

export default combineReducer(
    {
        user:userReducer
    }
);

export default combineReducer;