import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRecipesByCategory } from '../actions/recipeActions';
import { Recipe } from '../components/Recipe';

export function Brunch() {
    const filterRecipes = useSelector(state => state.filterRecipes);
    const { recipes } = filterRecipes;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listRecipesByCategory("brunch"))
    }, [dispatch]);

    return (
        <div className="homeScreen">
            <div className="filter-wrapper">
                <p className="filter-text">Brunch</p>
                <hr className="hr-filter" />
            </div>
            <div className="home">
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe._id}
                        recipe={recipe}
                    />
                ))}
            </div>
        </div>
    )
}
