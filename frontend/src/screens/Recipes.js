import React, { useEffect, useState, } from 'react';
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecipe, updateRecipe, createRecipe, listUserRecipes } from '../actions/recipeActions';
import Axios from 'axios';

export function Recipes(props) {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("breakfest");
    const [preparationTime, setPreparationTime] = useState(0);
    const [numberPeople, setNumberPeople] = useState(0);
    const [description, setDescription] = useState("");
    const [recipe, setRecipe] = useState("");

    const [selectedFile, setSelectedFile] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState("");
    const [canCreateRecipe, setCanCreateRecipe] = useState(false)

    const recipesUserList = useSelector(state => state.recipesUserList);
    const { userRecipes } = recipesUserList;

    const [recipesRow, setRecipesRow] = useState(userRecipes);
    const dispatch = useDispatch();

    const userStatus = useSelector(state => state.userLogin);
    const { userInfo } = userStatus;

    const createdRecipe = useSelector(state => state.createRecipe);
    const { successCreate } = createdRecipe

    const updatedRecipe = useSelector(state => state.updateRecipe);
    const { successUpdate } = updatedRecipe

    const deletedRecipe = useSelector(state => state.deleteRecipe);
    const { success } = deletedRecipe;

    
    const deleteRecipeHandler = (id) => {
        dispatch(deleteRecipe(id));
        if (success) {
            alert('The recipe is successfully deleted!');
        }
        setRecipesRow([
            ...recipesRow.filter(recipe => id !== recipe._id),
        ]);
        dispatch(listUserRecipes(userInfo.user._id))
        props.history.push("/recipes");
    }

    const onChangeHandler = e => {
        setSelectedFile(e.target.files[0]);
        console.log("Select:", e.target.files[0])
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if (canCreateRecipe) {
            dispatch(createRecipe({ title, user: userInfo.user._id, image, category, preparationTime, numberPeople, description, recipe }));
        } else {
            dispatch(updateRecipe({ id, title, image, category, preparationTime, numberPeople, description, recipe }));
        }

        const formData = new FormData();
        formData.append('image', selectedFile);
        try {
            const { data } = await Axios.post(`http://localhost:9003/api/storage/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`
                }
            });
            const { imageFile } = data;
            const getImage = await Axios.get(`http://localhost:9003/api/storage/files/${imageFile.name}`);
            setImage(getImage)
        } catch (err) {
            alert("Could not upload the file!");
        }
    };

    useEffect((id) => {
        if (successCreate || successUpdate) {
            alert('The recipe is successfully created/edited!');
        }
        dispatch(listUserRecipes(userInfo.user._id));
        props.history.push("/recipes");
    }, [userInfo.user._id, dispatch, props.history, successCreate, successUpdate]);

    const openModelUpdate = (recipe) => {
        setIsOpen(true);
        setCanCreateRecipe(false);
        setId(recipe._id);
        setTitle(recipe.title);
        setImage(recipe.image);
        setCategory(recipe.category);
        setPreparationTime(recipe.preparationTime);
        setNumberPeople(recipe.numberPeople);
        setDescription(recipe.description);
        setRecipe(recipe.recipe);
    }

    const openModelCreate = () => {
        setIsOpen(true);
        setCanCreateRecipe(true);
        setTitle("");
        setImage(null);
        setCategory("");
        setPreparationTime(0);
        setNumberPeople(0);
        setDescription("");
        setRecipe("");
    };

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
                            <img id="small-image" src={image} alt = {image} onChange={(e) => setImage(e.target.value)} />
                            <label className="upload-btn">
                                <input type="file" name="image" onChange={onChangeHandler} />
                                UPLOAD IMAGE
                            </label>
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
                                value={recipe}
                                required
                                onChange={e => setRecipe(e.target.value)}
                            />
                        </div>
                    </form>
                </>
            ) : (
                <>
                    <div className="recipes-wrapper">
                        <p className="my-recipes-text">My Recipes</p>
                        <hr className="recipes-hr" />
                        <img className="icon-plus-back" src="images/icon_plus_white.svg" alt="plus" onClick={() => openModelCreate()}></img>
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
                            {userRecipes && userRecipes.map((recipe, i) => {
                                const date = Moment(recipe.createdAt).format("DD.MM.YYYY")
                                return (
                                    <tr className="tr-body" key={i}>
                                        <td className="title-cell" onClick={() => openModelUpdate(recipe)}>{recipe.title}</td>
                                        <td className="category-cell">
                                            <div className="category-cell-text">
                                                {recipe.category}
                                            </div>
                                        </td>
                                        <td>{date}</td>
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
