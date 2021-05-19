import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import { detailsRecipeReducer, recipesListReducer } from './reducers/recipeReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';

const initialState = {};

const reducer = combineReducers({
    recipesList: recipesListReducer,
    detailsRecipe: detailsRecipeReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;