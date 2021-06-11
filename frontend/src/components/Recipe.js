import React from 'react';

export function Recipe(props) {
    const { recipe } = props;

    return (
        <div key={recipe._id} className="card-container">
                <div className="recipe-img-wrapper">
                    <img className="recipe-img" src={recipe.image} alt={recipe.name} onClick={() => props.cardEvents(recipe)} />
                    <p className="recipe-category">{recipe.category} </p>
                </div>
                <div className="card-body">
                    <p className="recipe-title" onClick={() => props.cardEvents(recipe)}>{recipe.title}</p>
                    <p className="card-text">{recipe.description}</p>
                    <div className="card-info">
                        <div className="card-info-left">
                            <i><img className=" card-info time" src="/images/icon_time.svg" alt="time"></img>{recipe.preparationTime + "min"}</i>
                            <i><img className="card-info plate" src="/images/icon_plate.svg" alt="plate"></img>{recipe.numberPeople + " persons"}</i>
                            <i><img className="card-info star" src="/images/icon_star.svg" alt="star" onClick={() =>props.saveRating(recipe)}></img>{recipe.rating}</i>
                        </div>
                        <div className="card-info-right">
                            <i><img onClick={() => props.cardEvents(recipe)} className="arrows" src="/images/icon_arrows_white.svg" alt="arrows"></img></i>
                        </div>
                    </div>
                </div>
        </div>
    )
}
