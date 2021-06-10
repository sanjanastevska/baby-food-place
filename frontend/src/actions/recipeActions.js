import Axios from "axios";
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
    RECIPE_NEWEST_LIST_FAIL, 
    RECIPE_NEWEST_LIST_REQUEST, 
    RECIPE_NEWEST_LIST_SUCCESS, 
    RECIPE_POPULAR_LIST_FAIL, 
    RECIPE_POPULAR_LIST_REQUEST, 
    RECIPE_POPULAR_LIST_SUCCESS, 
    RECIPE_SAVE_FAIL, 
    RECIPE_SAVE_REQUEST, 
    RECIPE_SAVE_SUCCESS,
    RECIPE_LIST_BY_CATEGORY_REQUEST,
    RECIPE_LIST_BY_CATEGORY_SUCCESS,
    RECIPE_LIST_BY_CATEGORY_FAIL,
    RECIPE_UPDATE_REQUEST,
    RECIPE_UPDATE_SUCCESS,
    RECIPE_UPDATE_FAIL,
    RECIPE_CREATE_REQUEST,
    RECIPE_CREATE_SUCCESS,
    RECIPE_CREATE_FAIL,
    RECIPE_RATING_REQUEST,
    RECIPE_RATING_SUCCESS,
    RECIPE_RATING_FAIL} from "../constants/recipeConstants";

// fetch recipes
export const listRecipes = () => async(dispatch) => {
    dispatch({
        type: RECIPE_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('http://localhost:9002/api/recipes');
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

//get a recipe by its id from backend  
export const detailsRecipe = recipeId => async(dispatch) => {
    dispatch({
        type: RECIPE_DETAILS_REQUEST,
        payload: recipeId
    });
    try {
        const { data } = await Axios.get(`http://localhost:9002/api/recipes/${recipeId}`);
        dispatch({
            type: RECIPE_DETAILS_SUCCESS,
            payload: data.recipe
        });
        
    } catch(err) {
        dispatch({
            type: RECIPE_DETAILS_FAIL,
            payload: err.message
        });
    }
}

// create recipe
export const createRecipe = (recipe) => async (dispatch, getState) => {
    try {
        dispatch({
            type: RECIPE_CREATE_REQUEST,
            payload: recipe
        });

            const {
            userLogin: { userInfo } 
        } = getState();


        const { data } = await Axios.post(`http://localhost:9002/api/recipes/`, recipe , {
            headers: {Authorization: `Bearer ${userInfo.token}`}
        })
        dispatch({
            type: RECIPE_CREATE_SUCCESS,
            payload: data.recipe
        });
    } catch(err) {
        dispatch({
            type: RECIPE_CREATE_FAIL,
            payload: err.message
        });
    }
};

// update recipe 
export const updateRecipe = (recipe, recipeId) => async(dispatch, getState) => {
    dispatch({
        type: RECIPE_UPDATE_REQUEST,
        payload: {recipe, recipeId}

    });

    const {
        userLogin: { userInfo } 
    } = getState();

    try{
        const { data } = await Axios.patch(`http://localhost:9002/api/recipes/${recipe.id}`, recipe, {
            headers: {Authorization: `Bearer ${userInfo.token}`}
        })
        dispatch({
            type: RECIPE_UPDATE_SUCCESS,
            payload: data
        });

    } catch(err) {
        dispatch({
            type: RECIPE_UPDATE_FAIL,
            payload: err.message
        });
    }
};

//delete a recipe by its id  
export const deleteRecipe = recipeId => async(dispatch, getState) => {
    dispatch({
        type: RECIPE_DELETE_REQUEST,
        payload: recipeId
    });

    const {
        userLogin: { userInfo } 
    } = getState();
    try {
        await Axios.delete(`http://localhost:9002/api/recipes/${recipeId}`, {
            headers: {Authorization: `Bearer ${userInfo.token}`}
        });
        dispatch({
            type: RECIPE_DELETE_SUCCESS
        });
        
    } catch(err) {
        dispatch({
            type: RECIPE_DELETE_FAIL,
            payload: err.message
        });
    }
}

export const listNewestRecipes = () => async (dispatch) => {
    dispatch({
        type: RECIPE_NEWEST_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get('http://localhost:9002/api/recipes/newest');
        dispatch({
            type: RECIPE_NEWEST_LIST_SUCCESS,
            payload: data.getNewestRecipes
        });
    } catch(err) {
        dispatch({
            type:RECIPE_NEWEST_LIST_FAIL,
            payload: err.message
        })
    }
};

export const listPopularRecipes = () => async (dispatch) => {
    dispatch({
        type: RECIPE_POPULAR_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get('http://localhost:9002/api/recipes/popular');
        dispatch({
            type: RECIPE_POPULAR_LIST_SUCCESS,
            payload: data.getTheMostPopularRecipes
        });
    } catch(err) {
        dispatch({
            type:RECIPE_POPULAR_LIST_FAIL,
            payload: err.message
        })
    }
};

export const listRecipesByCategory = (category) => async (dispatch) => {
    dispatch({
        type: RECIPE_LIST_BY_CATEGORY_REQUEST
    });

    try {
        const { data } = await Axios.get(`http://localhost:9002/api/recipes/filter?category=${category}`);
        
        dispatch({
            type: RECIPE_LIST_BY_CATEGORY_SUCCESS,
            payload: data.getRecipesByCategory
        });
    } catch(err) {
        dispatch({
            type:RECIPE_LIST_BY_CATEGORY_FAIL,
            payload: err.message
        })
    }
};

// rate
export const rateRecipe = (recipeId, rating) => async(dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo } 
        } = getState();

        dispatch({
            type: RECIPE_RATING_REQUEST,
            payload: rating
        });

        const { data } = await Axios.post(`http://localhost:9002/api/recipes/${recipeId}/rating`, rating, {
            headers: {Authorization: `Bearer ${userInfo.token}`}
        });
        dispatch({
            type: RECIPE_RATING_SUCCESS,
            payload: data.rating
        });
        
    } catch(err) {
        dispatch({
            type: RECIPE_RATING_FAIL,
            payload: err.message
        });
    }
}