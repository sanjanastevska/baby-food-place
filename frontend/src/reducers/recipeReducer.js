import {
    RECIPE_DELETE_FAIL,
    RECIPE_DELETE_REQUEST,
    RECIPE_DELETE_SUCCESS,
    RECIPE_DETAILS_FAIL,
    RECIPE_DETAILS_REQUEST,
    RECIPE_DETAILS_SUCCESS,
    RECIPE_LIST_FAIL,
    RECIPE_LIST_REQUEST,
    RECIPE_LIST_SUCCESS, 
    RECIPE_SAVE_FAIL, 
    RECIPE_SAVE_REQUEST, 
    RECIPE_SAVE_SUCCESS} from "../constants/recipeConstants";

const initialState = {
    recipes: []
}
export const recipesListReducer = ( state = initialState, action) => {
    switch(action.type) {
        case RECIPE_LIST_REQUEST:
            return {
                ...state
            };
        case RECIPE_LIST_SUCCESS:
            return {
                ...state,
                recipes: action.payload.recipes
            };
        case RECIPE_LIST_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export const detailsRecipeReducer = (state = { recipe: {}}, action) => {
    switch(action.type) {
        case RECIPE_DETAILS_REQUEST:
            return {
                ...state
            };
        case RECIPE_DETAILS_SUCCESS:
            return {
                ...state,
                recipe: action.payload
            };
        case RECIPE_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export const saveRecipeReducer = (state = {}, action) => {
    switch(action.type) {
        case RECIPE_SAVE_REQUEST:
            return {
                ...state
            };
        case RECIPE_SAVE_SUCCESS:
            return {
                ...state,
                success: true,
                recipe: action.payload
            };
        case RECIPE_SAVE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};


export const deleteRecipeReducer = (state = {}, action) => {
    switch(action.type) {
        case RECIPE_DELETE_REQUEST:
            return {
                ...state
            };
        case RECIPE_DELETE_SUCCESS:
            return {
                ...state,
                success: true
            };
        case RECIPE_DELETE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};