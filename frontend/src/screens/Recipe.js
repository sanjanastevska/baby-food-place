import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsRecipe } from '../actions/recipeActions';


export function Recipe(props) {
    const recipeId = props.match.params.id;
    const recipeDetails = useSelector(state => state.detailsRecipe);
    const { recipe } = recipeDetails;
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsRecipe(recipeId));
    }, [dispatch, recipeId]);

    
    return (
        <div className="recipe-dialog active">
            <div className="recipe-header">
                <div className="title">{recipe.title}</div>
                {/* <button className=".close-btn"> */}
                    <img className="close" src="/images/icon_close.svg" alt="close" onClick='{handleClose}'></img>
                {/* </button> */}
            </div>
            <div className="recipe-body">
                <div className="recipe-left-column">
                    <img className="recipe-image-small" src={recipe.image} alt={recipe.title}></img>
                    <div className="serving-info">
                        <div className="best-served">Best Served For</div>
                        <div className="category">{recipe.category}</div>
                    </div>
                    <p className="recipe-discription">{recipe.description}</p>
                    <div className="info-recipe">
                        <i><img className="icon" src="/images/icon_time.svg" alt="time"></img>{recipe.preparationTime + " min"}</i>
                        <i><img className="icon" src="/images/icon_plate.svg" alt="plate"></img>{recipe.numberPeople + " persons"}</i>
                        <i><img className="icon" src="/images/icon_star.svg" alt="star"></img>{recipe.rating}</i>
                    </div>
                </div>
                <div className="recipe-right-column">
                    <div className="best-served">Recipe Details</div>
                    <p className="recipe-recipe-disc">{recipe.recipe}</p>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    )
};
