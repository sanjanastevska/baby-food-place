import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { data } from '../data';

export function Recipe(props) {
    const recipe = data.recipes.find(x => x._id === props.match.params.id);
    if(!recipe) {
        return <div>Recipe not found</div>
    }
    // const recipeDetails = useSelector(state => state.detailsRecipe);
    // const { recipe } = recipeDetails;
    // const recipeId = props.match.params.id;

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(detailsRecipe(recipeId));
    // }, [dispatch, recipeId]);

    return (
        <div>
            <h1>{recipe.title}</h1>
            <div className="row">
                <div className="recipe-col-1">
                    <img className="recipe-image" src={recipe.image} alt={recipe.title}></img>
                    <div className="title">
                        <h3>Best Served For</h3>
                        <span className="category">{recipe.category}</span>
                    </div>
                    <p>{recipe.description}</p>
                    <div className="card-info">
                        <span><img className="time" src="/images/icon_time.svg" alt="time"></img></span>
                        <span><i>{recipe.preparationTime + "min"}</i></span>
                        <span><img className="plate" src="/images/icon_plate.svg" alt="plate"></img></span>
                        <span><i>{recipe.numberPeople + "persons"}</i></span>
                        <span><img className="star" src="/images/icon_star.svg" alt="star"></img></span>
                        <span><i>{recipe.rating}</i></span>
                        <span><img onClick="showMoreHandler" className="arrows" src="/images/icon_arrows_white.svg" alt="arrows"></img></span>
                    </div>
                </div>
                <div className="recipe-col-2">
                    <h3>Recipe Details</h3>
                    <p>{recipe.recipe}</p>
                </div>
            </div>
        </div>
    )
};
