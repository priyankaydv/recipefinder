import React ,{useState}from "react";
import Ingredient from "./Ingredient";
import "./Recipe.css";
import Axios from 'axios';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';




const Recipe = (recipe) => {
	const { strMeal, strMealThumb, strCategory, strArea, strInstructions ,strSource} =
		recipe.recipe;
        

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
			{/* <h1 >{strMeal}<span className="like"><button aria-hidden="true" className="like-btn"><FavoriteBorderOutlinedIcon/></button>
						 </span></h1> */}
            <h1><a href={strSource} target="_blank" rel="noopenernoreferred">{strMeal}<span className="like">
            <FormControlLabel
        control={<Checkbox icon={<FavoriteBorderOutlinedIcon fontSize="large" />} 
                  checkedIcon={<FavoriteBorder fontSize="large" />}
          name="checkedH" />}
      
      />
                </span></a></h1>
            </div>
			<img src={strMealThumb} alt={strMealThumb} />
			<div className="catarea">
				<h3>Category of meal: {strCategory} <br/> area of the meal: {strArea}</h3>
			</div>
            <h3 className="Ingre-head">Ingredients</h3>
            <div class="Ingre">
			<Ingredient
				recipe={recipe}
				ingredientsKeyNames={ingredientsKeyNames}
				quantityKeyNames={quantityKeyNames}
			/></div>
            <h3 className="recipe-head">Recipes </h3>
			<div className="inst">
				<h3>{strInstructions}</h3>
			</div>
		</div>
	);
};

export default Recipe;
