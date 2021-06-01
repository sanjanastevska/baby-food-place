import React, { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRecipes, deleteRecipe } from '../actions/recipeActions';

export function Recipes(props) {

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/create-recipe';

    const recipesList =  useSelector(state => state.recipesList);
    const { recipes } = recipesList;
    console.log("All recipes: ", recipes);

    const deletedRecipe = useSelector(state => state.deleteRecipe);
    const { success } = deletedRecipe;

    const renderBody = () => {
        return recipes && recipes.map(({ id, title, category, createdAt }) => {
            return (
                    <tr className="tr-body" key={id}>
                        <td className="title-cell">{title}</td>
                        <td className="category-cell">
                            <div className="category-cell-text">
                                {category}
                            </div>
                        </td>
                        <td>{createdAt}</td>
                        <td className="delete-recipe">
                            <img className="delete-icon" src="images/icon_trashcan.svg" alt="trashcan" onClick={deleteRecipeHandler}></img>
                        </td>
                    </tr>
            );
        });
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            listRecipes({})
        );
    }, [dispatch, props.history,]);

    const createRecipeHandler = () => {
        props.history.push(redirect);
    };
    
    const deleteRecipeHandler = (rowIndex) => {
        console.log("Id for removing: " + recipes[0]._id)

        dispatch(deleteRecipe(recipes[0]._id));
        if(success) {
            alert('The recipe is successfully deleted!');
        }
    }

    return (
        <div className="my-profile">
            <div className="recipes-wrapper">
                <p className="my-recipes-text">My Recipes</p>
                <hr className="recipes-hr" />
                <img className="icon-plus-back" src="images/icon_plus_white.svg" alt="plus" onClick={createRecipeHandler}></img>
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
                    {renderBody()}
                </tbody>
            </table>
        </div>
    )
}
