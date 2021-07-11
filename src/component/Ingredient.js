import React from "react";


const Ingredient = ({ recipe, ingredientsKeyNames, quantityKeyNames }) => {
	const getListItems = () => {
		const lstItems = [];

		for (let a = 1; a <= 20; ++a) {
			let ing = JSON.stringify(
				recipe.recipe[`${ingredientsKeyNames[a - 1]}`]
			);
			ing = ing.substr(1, ing.length - 2);
			const measure = JSON.stringify(
				recipe.recipe[`${quantityKeyNames[a - 1]}`]
			);
			console.log(typeof ing, ing);
			{
				ing.length !== 0 &&
					ing !== "ul" &&
					lstItems.push(
						<li>
							{ing} --- {measure}
						</li>
					);
			}
		}
		return lstItems;
	};

	return <ul >{getListItems()}</ul>;
};

export default Ingredient;
