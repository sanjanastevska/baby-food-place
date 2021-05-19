import Axios from "axios";
import {
    RECIPE_DETAILS_FAIL,
    RECIPE_DETAILS_REQUEST,
    RECIPE_DETAILS_SUCCESS,
    RECIPE_LIST_FAIL,
    RECIPE_LIST_REQUEST,
    RECIPE_LIST_SUCCESS } from "../constants/recipeConstants";

export const listRecipes = () => async(dispatch) => {
    dispatch({
        type: RECIPE_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/recipes');
        dispatch({
            type: RECIPE_LIST_SUCCESS,
            payload: data
        });
    } catch(err) {
        dispatch({
            type: RECIPE_LIST_FAIL,
            payload: err.message
        });
    }
};

//get a recipe by it's id from backend and updte redux store 
export const detailsRecipe = recipeId => async(dispatch) => {
    dispatch({
        type: RECIPE_DETAILS_REQUEST,
        payload: recipeId
    });
    try {
        const { data } = await Axios.get(`/api/recipes/${recipeId}`);
        dispatch({
            type: RECIPE_DETAILS_SUCCESS,
            payload: data
        });
    } catch(err) {
        dispatch({
            type: RECIPE_DETAILS_FAIL,
            payload: err.message
        });
    }

}