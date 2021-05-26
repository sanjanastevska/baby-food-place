import React from 'react';

export function CreateRecipe() {

    return (
        <div className="my-profile">
            <div className="recipes-wrapper">
                <p className="my-recipes-text">My Recipes</p>
                <hr className="recipes-hr" />
                <img className="icon-plus-back" src="images/icon_back_white.svg" alt="back"></img>
            </div>
            <form className="form-recipe-container">
                <div className="recipe-image-wrapper">
                    <label className="recipe-image-text" htmlFor="image">Recipe Image</label>
                    <img src="/images/pizza-beer.jpg" alt="Homemade Pizza" className="small-image"></img>
                    <button className="upload-btn">UPLOAD IMAGE</button>
                </div>
                <div className="recipe-info-wrapper-one">
                    <div>
                        <label className="recipe-image-text" htmlFor="recipeTitle">Recipe Title</label>
                        <input
                            type="text"
                            id="recipeTitle"
                            placeholder="Homemade Pizza"
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
                                placeholder="45"
                                required
                            // onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="recipe-image-text" htmlFor="Nopeople">No. People</label>
                            <input
                                type="number"
                                id="Nopeople"
                                placeholder="4"
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
                            placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage"
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
                        placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures"
                        required
                    // onChange={e => setFirstName(e.target.value)}
                    />
                </div>
            </form>
        </div>

    )
}
