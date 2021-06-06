import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsRecipe, listRecipesByCategory } from '../actions/recipeActions';
import { Recipe } from '../components/Recipe';
import { Recipe as RecipeModal } from './Recipe'

export function Breakfest() {
    const filterRecipes = useSelector(state => state.filterRecipes);
    const { recipes } = filterRecipes;


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose= () => setShow(false);
    const [recipeDetails, setDetailsRecipe] = useState({});

    const cardEvents = card => {
        console.log("(4) CARD", card);

        
        let foundRecipe = recipes.find(recipe => recipe._id === card._id);
        if(foundRecipe !== null) {
            console.log('Najdovme: ', foundRecipe._id)
            setDetailsRecipe(foundRecipe);
        }
        else {
            console.log('NEMAT')
        }

        handleShow()
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listRecipesByCategory("breakfest"))
    }, [dispatch]);

    return (
        <>
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
                    {show ?
                                <RecipeModal
                                    show={show}
                                    onHide={handleClose}
                                    // key={recipe._id}
                                    // recipe={recipe}
                                />
                                : null}
                </div>
                {/* <div className="overlay active"></div> */}
            </div>
        </>
    )
}
