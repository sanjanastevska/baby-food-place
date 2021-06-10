import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsRecipe, listRecipesByCategory } from '../actions/recipeActions';
import { Recipe } from '../components/Recipe';
import { Recipe as RecipeModal } from './Recipe'

export function Breakfest() {
    const filterRecipes = useSelector(state => state.filterRecipes);
    const { recipes } = filterRecipes;

    const recipeDetails = useSelector(state => state.detailsRecipe);
    const { recipe } = recipeDetails;


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const cardEvents = card => {
        console.log("CARD", card);
        dispatch(detailsRecipe(card._id))
        handleShow()
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listRecipesByCategory("breakfest"))
    }, [dispatch]);

    return (
        <div className="homeScreen">
            <div className="filter-wrapper">
                <p className="filter-text">Breakfest</p>
                <hr className="hr-filter" />
            </div>
            <div className="home">
                {recipes.map(recipe => (
                    <div>
                        <Recipe
                            key={recipe._id}
                            recipe={recipe}
                            cardEvents={cardEvents}
                        />
                    </div>
                ))}
            </div>
            {show ?
                <>
                    <RecipeModal
                        show={show}
                        onHide={handleClose}
                        recipe={recipe}
                    />
                    <div className="overlay active"></div>
                </>
                : null} 
        </div>
    )
}