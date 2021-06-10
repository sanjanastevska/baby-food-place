import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsRecipe, listRecipesByCategory, rateRecipe } from '../actions/recipeActions';
import { Recipe } from '../components/Recipe';
import { Recipe as RecipeModal } from './Recipe'

export function Brunch() {

    // const [rating, setRating] = useState(0);
    // const ratedRecipe = useSelector(state => state.rateRecipe);
    // const { success: rateRecipeSuccess } = ratedRecipe;

    const recipeDetails = useSelector(state => state.detailsRecipe);
    const { recipe } = recipeDetails;

    const filterRecipes = useSelector(state => state.filterRecipes);
    const { recipes } = filterRecipes;

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listRecipesByCategory("brunch"));
        //     if (rateRecipeSuccess ) {
        //         alert('Review submitted successfully.');
        //         setRating(0);
        //       }
    }, [dispatch]);

    const cardEvents = card => {
        console.log("CARD", card);
        dispatch(detailsRecipe(card._id))
        handleShow()
    }

    // const saveRating = () => {
    //     dispatch(rateRecipe(recipe._id, rating ));
    // }


    return (
        <div className="homeScreen">
            <div className="filter-wrapper">
                <p className="filter-text">Brunch</p>
                <hr className="hr-filter" />
            </div>
            <div className="home">
                {recipes.map(recipe => (
                    <div>
                        <Recipe
                            key={recipe._id}
                            recipe={recipe}
                            cardEvents={cardEvents}
                        // rating = {saveRating}
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
