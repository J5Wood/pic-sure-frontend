import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
import commentReducer from './commentReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    postReducer,
    userReducer,
    commentReducer,
    errorReducer
})

export default rootReducer