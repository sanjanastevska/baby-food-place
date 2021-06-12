import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsRecipe, listRecipesByCategory, rateRecipe } from '../actions/recipeActions';
import { Recipe } from '../components/Recipe';
import { Recipe as RecipeModal } from './Recipe'

export function Brunch(props) {

    const [rating, setRating] = useState(0);

    const recipeDetails = useSelector(state => state.detailsRecipe);
    const { recipe } = recipeDetails;

    const filterRecipes = useSelector(state => state.filterRecipes);
    const { recipes } = filterRecipes;

    const ratedRecipe = useSelector(state => state.rateRecipe);
    const { success : successRate } = ratedRecipe;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listRecipesByCategory("brunch"));
    }, [dispatch]);

    const saveRating =  (recipe) => {
        if(!userInfo) {
            alert('You need to log in in order to perform this action.');
            props.history.push("/login");
        }

        dispatch(rateRecipe(recipe._id));
        setRating(recipe.rating);
        if (successRate) {
            alert('Review submitted successfully.');
            dispatch(listRecipesByCategory("brunch"));
        }
    }

    const cardEvents = card => {
        dispatch(detailsRecipe(card._id))
        handleShow()
    }

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
                            saveRating = {saveRating}
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
