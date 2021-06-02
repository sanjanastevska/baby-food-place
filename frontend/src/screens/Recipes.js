import React, { useEffect, useState,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRecipes, deleteRecipe } from '../actions/recipeActions';
import { RecipeTable } from '../components/RecipeTable';

export function Recipes(props) {
    const recipesList =  useSelector(state => state.recipesList);
    const { recipes } = recipesList;
    const [recipesRow, setRecipesRow] = useState(recipes);
    const dispatch = useDispatch();

    const userStatus = useSelector(state => state.userLogin);
    const { userInfo } = userStatus;

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/create-recipe';

    const createRecipeHandler = () => {
        props.history.push(redirect);
    };

    const deletedRecipe = useSelector(state => state.deleteRecipe);
    const { success } = deletedRecipe;


    const deleteRecipeHandler = (id) => {
        dispatch(deleteRecipe(id));
        if(success) {
            alert('The recipe is successfully deleted!');
        }
        setRecipesRow([
            ...recipesRow.filter(recipe => id !== recipe._id)
        ]);
        props.history.push("/recipes");
    }

    useEffect(() => {
        dispatch(
            listRecipes(userInfo)
        );
    }, [props.history, redirect, userInfo]);

    return (
        <div className="my-profile">
            <div className="recipes-wrapper">
                <p className="my-recipes-text">My Recipes</p>
                <hr className="recipes-hr" />
                <img className="icon-plus-back" src="images/icon_plus_white.svg" alt="plus" onClick={createRecipeHandler}></img>
            </div>
            <RecipeTable
            recipes = {recipesRow}
            deleteRecipeHandler = {deleteRecipeHandler}
            />
        </div>
    )
}
