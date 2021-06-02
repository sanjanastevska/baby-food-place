import React from 'react';
import PropTypes from 'prop-types';

export function RecipeTable(props) {

    return (
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
                {props.recipes && props.recipes.map((recipe, i) => {
                    return (
                        <tr className="tr-body" key={i}>
                            <td className="title-cell">{recipe.title}</td>
                            <td className="category-cell">
                                <div className="category-cell-text">
                                    {recipe.category}
                                </div>
                            </td>
                            <td>{recipe.createdAt}</td>
                            <td className="delete-recipe">
                                <img className="delete-icon" src="images/icon_trashcan.svg" alt="trashcan" onClick={() => props.deleteRecipeHandler(recipe._id, i)}></img>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

RecipeTable.propTypes = {
    recipes: PropTypes.array.isRequired,
    deleteRecipeHandler:PropTypes.func
}