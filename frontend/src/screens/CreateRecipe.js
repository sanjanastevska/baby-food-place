import React, { useState } from 'react';
import { data } from '../data';

export function CreateRecipe(props) {
    const recipe = data.recipes.find(props.match.params.id);

    return (
        <div className="my-profile">
            <div className="recipes-wrapper">
                <p className="my-recipes-text">My Recipes</p>
                <hr className="recipes-hr" />
                <img className="icon-plus-back" src="images/icon_back_white.svg" alt="back"></img>
            </div>
            <form className="form-recipe-container" key={recipe._id}>
                <div className="recipe-image-wrapper">
                    <label className="recipe-image-text" htmlFor="image">Recipe Image</label>
                    <img src={recipe.image} alt={recipe.title} className="small-image"></img>
                    <button className="upload-btn">UPLOAD IMAGE</button>
                </div>
                <div className="recipe-info-wrapper-one">
                    <div>
                        <label className="recipe-image-text" htmlFor="recipeTitle">Recipe Title</label>
                        <input
                            type="text"
                            id="recipeTitle"
                            placeholder={recipe.title}
                            required
                        // onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="number-fields">
                        <div>
                            <label className="recipe-image-text" htmlFor="category">Category</label>
                            <select name="category" id="category">
                                <option value="breakfest">Breakfest</option>
                                <option value="brunch">Brunch</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>
                        <div>
                            <label className="recipe-image-text" htmlFor="prepTime">Preparation Time</label>
                            <input
                                type="number"
                                id="prepTime"
                                placeholder={recipe.preparationTime}
                                required
                            // onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="recipe-image-text" htmlFor="Nopeople">No. People</label>
                            <input
                                type="number"
                                id="Nopeople"
                                placeholder={recipe.numberPeople}
                                required
                            // onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="recipe-image-text" htmlFor="desc">Short Description</label>
                        <textarea
                            type="text"
                            id="desc"
                            placeholder={recipe.description}
                            required
                        // onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <button className="save-btn" type="submit">SAVE</button>
                </div>
                <div className="recipe-info-wrapper-two">
                    <label className="recipe-image-text" htmlFor="recipe">Short Description</label>
                    <textarea
                        type="text"
                        id="recipe"
                        placeholder={recipe.recipe}
                        required
                    // onChange={e => setFirstName(e.target.value)}
                    />
                </div>
            </form>
        </div>

    )
}
