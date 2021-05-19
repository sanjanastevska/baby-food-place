import React from 'react';
import { Link } from 'react-router-dom';

export function Recipe(props) {
    const { recipe } = props;
    
    return (
        <div key={recipe._id} className="card-container">
            <Link to={`/recipes/${recipe._id}`}>
                <img className="recipe-img" src={recipe.image} alt={recipe.name} />
            </Link>
            <div className="card-body">
                <Link to={`recipes/${recipe._id}`} className="recipe-title">
                    <p>{recipe.title}</p>
                </Link>
                <p className="card-text">{recipe.description}</p>
                <br/>
                {/* <div className="card-info"> */}
                    {/* <span><img className="time" src="/images/icon_time.svg" alt="time"></img></span>
                    <span><i className="info">{recipe.preparationTime + "min"}</i></span>
                    <span><img className="plate" src="/images/icon_plate.svg" alt="plate"></img></span>
                    <span><i className="info">{recipe.numberPeople + "persons"}</i></span>
                    <span><img className="star" src="/images/icon_star.svg" alt="star"></img></span>
                    <span><i className="info">{recipe.rating}</i></span>
                    <span><img onClick="showMoreHandler" className="arrows" src="/images/icon_arrows_white.svg" alt="arrows"></img></span> */}
                    <ul className="card-info">
                        <li><img className="time" src="/images/icon_time.svg" alt="time"></img></li>
                        <li className="info">{recipe.preparationTime + "min"}</li>
                        <li><img className="plate" src="/images/icon_plate.svg" alt="plate"></img></li>
                        <li className="info">{recipe.numberPeople + "persons"}</li>
                        <li><img className="star" src="/images/icon_star.svg" alt="star"></img></li>
                        <li className="info">{recipe.rating}</li>
                        <li><img onClick="showMoreHandler" className="arrows" src="/images/icon_arrows_white.svg" alt="arrows"></img></li>
                    </ul>
                {/* </div> */}
            </div>
        </div>
    )
}
