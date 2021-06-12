import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsRecipe, listNewestRecipes, listPopularRecipes, rateRecipe } from '../actions/recipeActions';
import { Recipe } from '../components/Recipe';
import { Recipe as RecipeModal } from './Recipe';

export function Home(props) {

    const [rating, setRating] = useState(0);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const newestRecipes = useSelector(state => state.newestRecipes);
    const { recipes: newRecipes } = newestRecipes;

    const popularRecipes = useSelector(state => state.popularRecipes);
    const { recipes: mostPopularRecipes } = popularRecipes;

    const recipeDetails = useSelector(state => state.detailsRecipe);
    const { recipe } = recipeDetails;

    const ratedRecipe = useSelector(state => state.rateRecipe);
    const { success : successRate } = ratedRecipe;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listPopularRecipes());
        dispatch(listNewestRecipes());
    }, [dispatch]);

    const cardEvents = card => {
        dispatch(detailsRecipe(card._id));
        handleShow()
    }

    const saveRating =  (recipe) => {
        if(!userInfo) {
            alert('You need to log in in order to perform this action.');
            props.history.push("/login");
        }
        dispatch(rateRecipe(recipe._id));
        setRating(recipe.rating);
        if (successRate) {
            alert('Review submitted successfully.');
            dispatch(listPopularRecipes());
            dispatch(listNewestRecipes());
        }
    };

    return (
        <div className="homeScreen" >
            <div className="fresh-and-new">
                <div className="fresh-and-new-wrapper">
                    <p className="fresh-and-new-text">Fresh & New</p>
                    <hr className="hr-fresh" />
                </div>
                <div className="home">
                    {newRecipes.map(recipe => (
                        <div>
                            <Recipe
                                key={recipe._id}
                                recipe={recipe}
                                cardEvents={cardEvents}
                                saveRating = {saveRating}
                            />
                        </div>
                    ))}
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
            </div>
            <div className="popular">
                <div className="popular-wrapper">
                    <p className="popular-text">Most Popular Recipes</p>
                    <hr className="hr-popular" />
                </div>
                <div className="home">
                    {mostPopularRecipes.map(recipe => (
                        <div>
                            <Recipe
                                key={recipe._id}
                                recipe={recipe}
                                cardEvents={cardEvents}
                                saveRating = {saveRating}
                            />
                        </div>
                    ))}
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
            </div>
        </div>
    );
}
