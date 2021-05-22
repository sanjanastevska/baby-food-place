import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { listRecipes } from '../actions/recipeActions';
import { Recipe } from '../components/Recipe';
import { data } from '../data';

export function Home() {
 
    //to get an object from redux store we need to use useSelector
    // const recipesList = useSelector(state => state.recipesList);
    // const dispatch = useDispatch();
    // const { recipes } = recipesList;

    // useEffect(() => {
    //     dispatch(listRecipes());
    // }, [dispatch]);

    return (
        <div className="home">
            { data.recipes.map(recipe => (
                <Recipe
                    key={recipe._id}
                    recipe={recipe}
                />
            ))}
        </div>
    );
}
