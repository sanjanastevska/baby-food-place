import React from 'react';

export function Recipe(props) {
    const { recipe } = props;

    return (
        <div className="recipe-dialog active" show={props.show}>
            <div className="recipe-header">
                <div className="title">{recipe.title}</div>
                <img className="close" src="/images/icon_close.svg" alt="close" onClick={() => props.onHide()}></img>
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
        </div>
    )
};
