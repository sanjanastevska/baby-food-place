import React, { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRecipes, deleteRecipe, saveRecipe } from '../actions/recipeActions';

export function Recipes(props) {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("breakfest");
    const [preparationTime, setPreparationTime] = useState(0);
    const [numberPeople, setNumberPeople] = useState(0);
    const [description, setDescription] = useState("");
    const [recipeDesc, setRecipeDesc] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState("");

    const recipesList = useSelector(state => state.recipesList);
    const { recipes } = recipesList;
    const [recipesRow, setRecipesRow] = useState(recipes);
    const dispatch = useDispatch();

    const userStatus = useSelector(state => state.userLogin);
    const { userInfo } = userStatus;

    const savedRecipe = useSelector(state => state.saveRecipe);
    const { successSave } = savedRecipe


    const deletedRecipe = useSelector(state => state.deleteRecipe);
    const { success } = deletedRecipe;


    const deleteRecipeHandler = (id) => {
        dispatch(deleteRecipe(id));
        if (success) {
            alert('The recipe is successfully deleted!');
        }
        setRecipesRow([
            ...recipesRow.filter(recipe => id !== recipe._id)
        ]);
        props.history.push("/recipes");
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveRecipe({ id, title, image, category, preparationTime, numberPeople, description, recipeDesc }));
    };

    useEffect(() => {
        if(successSave) {
            props.history.push("/recipes");
        }
        dispatch(
            listRecipes(userInfo)
        );
    }, [userInfo]);

    const openModel = (recipe) => {
        setIsOpen(true);
        setId(recipe._id);
        setTitle(recipe.name);
        setImage(recipe.image);
        setCategory(recipe.category);
        setPreparationTime(recipe.preparationTime);
        setNumberPeople(recipe.numberPeople);
        setDescription(recipe.description);
        setRecipeDesc(recipe.recipeDesc);
    }


    return (
        <div className="my-profile">
            {isOpen ? (
                <>
                    <div className="recipes-wrapper">
                        <p className="my-recipes-text">My Recipes</p>
                        <hr className="recipes-hr" />
                        <img className="icon-plus-back" src="images/icon_back_white.svg" alt="back" onClick={() => setIsOpen(false)}></img>
                    </div>
                    <form className="form-recipe-container" onSubmit={submitHandler}>
                        <div className="recipe-image-wrapper">
                            <label className="recipe-image-text" htmlFor="image">Recipe Image</label>
                            <input
                                type="text"
                                id="small-image"
                                value={image}
                                onChange={e => setImage(e.target.value)}
                            />
                            <button className="upload-btn">UPLOAD IMAGE</button>
                        </div>
                        <div className="recipe-info-wrapper-one">
                            <div>
                                <label className="recipe-image-text" htmlFor="recipeTitle">Recipe Title</label>
                                <input
                                    type="text"
                                    id="recipeTitle"
                                    placeholder="Enter Title"
                                    value={title}
                                    required
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="number-fields">
                                <div>
                                    <label className="recipe-image-text" htmlFor="category">Category</label>
                                    <select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
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
                                        placeholder="Enter Prep. Time"
                                        value={preparationTime}
                                        required
                                        onChange={e => setPreparationTime(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="recipe-image-text" htmlFor="Nopeople">No. People</label>
                                    <input
                                        type="number"
                                        id="Nopeople"
                                        placeholder="Enter No.people"
                                        value={numberPeople}
                                        required
                                        onChange={e => setNumberPeople(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="recipe-image-text" htmlFor="desc">Short Description</label>
                                <textarea
                                    type="text"
                                    id="desc"
                                    placeholder="Enter description"
                                    value={description}
                                    required
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <button className="save-btn" type="submit">SAVE</button>
                        </div>
                        <div className="recipe-info-wrapper-two">
                            <label className="recipe-image-text" htmlFor="recipe">Recipe</label>
                            <textarea
                                type="text"
                                id="recipe"
                                placeholder="Enter recipe"
                                value={recipeDesc}
                                required
                                onChange={e => setRecipeDesc(e.target.value)}
                            />
                        </div>
                    </form>
                </>
            ) : (
                <>
                    <div className="recipes-wrapper">
                        <p className="my-recipes-text">My Recipes</p>
                        <hr className="recipes-hr" />
                        <img className="icon-plus-back" src="images/icon_plus_white.svg" alt="plus" onClick={() => openModel()}></img>
                    </div>
                    <table className="recipes-table">
                        <thead>
                            <tr className="tr-head">
                                <th className="title-cell">Recipe Name</th>
                                <th>Category</th>
                                <th>Create On</th>
                                <th className="delete-recipe-header">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes && recipes.map((recipe, i) => {
                                return (
                                    <tr className="tr-body" key={i} onClick={() => openModel(recipe)} >
                                        <td className="title-cell">{recipe.title}</td>
                                        <td className="category-cell">
                                            <div className="category-cell-text">
                                                {recipe.category}
                                            </div>
                                        </td>
                                        <td>{recipe.createdAt}</td>
                                        <td className="delete-recipe">
                                            <img className="delete-icon" src="images/icon_trashcan.svg" alt="trashcan" onClick={() => deleteRecipeHandler(recipe._id, i)}></img>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </>
            )}

        </div>
    )
}
