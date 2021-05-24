import React, { useState } from 'react';
import { data } from '../data';

export function Recipes(props) {
    const [recipes, setRecipes] = useState(data.recipes);

    

    // const deleteRecipe = (id) => {
    //     // // axios.delete(`${URL}/${id}`).then(res => {
    //     // //     const del = employees.filter(employee => id !== employee.id)
    //     // //     setEmployees(del)
    //     // })
    //     { data.recipes.map(recipe => (
    //         <Recipe
    //             key={recipe._id}
    //             recipe={recipe}
    //         />
    //     ))}
    // }

    const renderBody = () => {
        return recipes && recipes.map(({id, title, category, createdOn}) => {
            return (
                <tr className="tr-body" key={id}>
                    <td className="title-cell">{title}</td>
                    <td className="category-cell">
                        <div className="category-cell-text">
                            {category}
                        </div>
                    </td>
                    <td>{createdOn}</td>
                    <td className="delete-recipe">
                        <img className="delete-icon" src="images/icon_trashcan.svg" alt="trashcan"></img>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className="my-profile">
            <div className="recipes-wrapper">
                <p className="my-recipes-text">My Recipes</p>
                <hr className="recipes-hr"/>
                <img className="icon-plus" src="images/icon_plus_white.svg" alt="plus"></img>
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
