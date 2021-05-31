import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRecipes } from '../actions/recipeActions';
import { Recipe } from '../components/Recipe';

export function Home() {
 
    //to get an object from redux store we need to use useSelector
    const recipesList = useSelector(state => state.recipesList);
    const { recipes } = recipesList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listRecipes({}));
    }, [dispatch]);

    return (
        <div className="home">
            { recipes.map(recipe => (
                <Recipe
                    key={recipe._id}
                    recipe={recipe}
                />
            ))}
        </div>
    );
}
