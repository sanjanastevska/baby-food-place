import React from 'react';
import { Link } from 'react-router-dom';

export function Recipe(props) {
    const { recipe } = props;

    return (
        <div key={recipe._id} className="card-container">
            <div className="recipe-img-wrapper">
                <Link to={`/recipes/${recipe._id}`}>
                    <img className="recipe-img" src={recipe.image} alt={recipe.name} />
                </Link>
                <p className="recipe-category">{recipe.category}</p>
            </div>
            <div className="card-body">
                <Link to={`recipes/${recipe._id}`} className="hidden-link" >
                    <p className="recipe-title">{recipe.title}</p>
                </Link>
                <p className="card-text">{recipe.description}</p>
                <div className="card-info">
                    <div className="card-info-left">
                        <i><img className=" card-info time" src="/images/icon_time.svg" alt="time"></img>{recipe.preparationTime + "min"}</i>
                        <i><img className="card-info plate" src="/images/icon_plate.svg" alt="plate"></img>{recipe.numberPeople + " persons"}</i>
                        <i><img className="card-info star" src="/images/icon_star.svg" alt="star"></img>{recipe.rating}</i>
                    </div>
                    <div className="card-info-right">
                        <i><img onClick="showMoreHandler" className="arrows" src="/images/icon_arrows_white.svg" alt="arrows"></img></i>
                    </div> 
                </div>
            </div>
        </div>
    )
}
