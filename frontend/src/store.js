import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import { deleteRecipeReducer, detailsRecipeReducer, listNewestRecipesReducer, listPopularRecipesReducer, listRecipesByCategoryReducer, recipesListReducer, saveRecipeReducer} from './reducers/recipeReducer';
import { updateUserReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducer';

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };


const reducer = combineReducers({
    recipesList: recipesListReducer,
    detailsRecipe: detailsRecipeReducer,
    saveRecipe: saveRecipeReducer,
    deleteRecipe: deleteRecipeReducer,
    newestRecipes: listNewestRecipesReducer,
    popularRecipes: listPopularRecipesReducer,
    filterRecipes: listRecipesByCategoryReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    updateUser: updateUserReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;