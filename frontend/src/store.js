import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { userLoginReducer } from './reducers/userReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer
});

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(
    reducer,
    middleware
);

export default store;