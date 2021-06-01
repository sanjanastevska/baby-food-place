import {
    RECIPE_CREATE_FAIL,
    RECIPE_CREATE_REQUEST,
    RECIPE_CREATE_SUCCESS,
    RECIPE_DELETE_FAIL,
    RECIPE_DELETE_REQUEST,
    RECIPE_DELETE_SUCCESS,
    RECIPE_DETAILS_FAIL,
    RECIPE_DETAILS_REQUEST,
    RECIPE_DETAILS_SUCCESS,
    RECIPE_LIST_FAIL,
    RECIPE_LIST_REQUEST,
    RECIPE_LIST_SUCCESS } from "../constants/recipeConstants";

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

export const createRecipeReducer = (state = {}, action) => {
    switch(action.type) {
        case RECIPE_CREATE_REQUEST:
            return {
                ...state
            };
        case RECIPE_CREATE_SUCCESS:
            return {
                ...state,
                success: true,
                recipe: action.payload
            };
        case RECIPE_CREATE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        // case PRODUCT_CREATE_RESET:
        //     return {};
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