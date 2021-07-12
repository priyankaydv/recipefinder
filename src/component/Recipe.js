import React, { useState } from "react";
import Ingredient from "./Ingredient";
import "./Recipe.css";
//import Axios from 'axios';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';




const Recipe = (recipe) => {
	const { strMeal, strMealThumb, strCategory, strArea, strInstructions, strSource } =
		recipe.recipe;
		//here we are intializing variables which are given in api 


	console.log(recipe);

	let ingredientsKeyNames = [];
	let quantityKeyNames = [];

	for (let a = 1; a <= 20; ++a) {
		ingredientsKeyNames[a - 1] = `strIngredient${a}`;
		quantityKeyNames[a - 1] = `strMeasure${a}`;
	}





	return (
		<div className="recipe">
			<div className="header">

				<h1><a href={strSource} target="_blank" rel="noopenernoreferred">{strMeal}<span className="like">
					<FormControlLabel
						control={<Checkbox icon={<FavoriteBorderOutlinedIcon fontSize="large" />}
							checkedIcon={<FavoriteBorder fontSize="large" />}
							name="checkedH" />}

					/>
				</span></a></h1>
			</div>
			{/*above code is for heading purpose and we are using href for redirecting to main source  and we are using material ui material icons i.e."favoritBorderOutline icon" to display the like icon  */}
			<img src={strMealThumb} alt={strMealThumb} />
			<div className="category-area">
				<h3><em >Category of Meal: </em>{strCategory}<br /> <em>Area of the Meal:</em> {strArea}</h3>
			</div>
			<h3 className="Ingredient-heading">Ingredients</h3>
			<div className="Ingredient">
				<Ingredient
					recipe={recipe}
					ingredientsKeyNames={ingredientsKeyNames}
					quantityKeyNames={quantityKeyNames}
				/></div>
			<h3 className="recipe-head">Recipes </h3>
			<div className="instruction">
				<h3>{strInstructions}</h3>
			</div>
		</div>
	);
};

export default Recipe;
