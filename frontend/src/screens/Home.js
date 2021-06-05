import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listNewestRecipes, listPopularRecipes, listRecipes } from '../actions/recipeActions';
import { Recipe } from '../components/Recipe';

export function Home() {

    //to get an object from redux store we need to use useSelector
    // const recipesList = useSelector(state => state.recipesList);
    // const { recipes } = recipesList;

    const newestRecipes = useSelector(state => state.newestRecipes);
    const { recipes:newRecipes } = newestRecipes;

    const popularRecipes = useSelector(state => state.popularRecipes);
    const { recipes:mostPopularRecipes } = popularRecipes;
   

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listPopularRecipes());
        dispatch(listNewestRecipes());
    }, [dispatch]);

    return (
        <div className="homeScreen" >
            <div className="fresh-and-new">
                <div className="fresh-and-new-wrapper">
                    <p className="fresh-and-new-text">Fresh & New</p>
                    <hr className="hr-fresh" />
                </div>
                <div className="home">
                    {newRecipes.map(recipe => (
                        <Recipe
                            key={recipe._id}
                            recipe={recipe}
                        />
                    ))}
                </div>
            </div>
            <div className="popular">
                <div className="popular-wrapper">
                    <p className="popular-text">Most Popular Recipes</p>
                    <hr className="hr-popular" />
                </div>
                <div className="home">
                    {mostPopularRecipes.map(recipe => (
                        <Recipe
                            key={recipe._id}
                            recipe={recipe}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
