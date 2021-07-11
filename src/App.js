import React, { useState } from 'react';
import './App.css';
import Recipe from './component/Recipe';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
// imported axios to fetch data from api
//imported uuidv4 to use as a key  


function App() {
  //we are using here functional component
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  //we are maintaining state through react hooks



  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  //this is url of api themealdb

  const getData = async () => {

    //we are using try and catch method to handle errors
    //we are using async to catch promises
    try {
      const result = await Axios.get(URL);
     setRecipes(result.data.meals)

      console.log(result.data);
      setQuery("");
    } catch (error) {
      console.error();

    }


  };
  const onSubmit = (e) => {
    e.preventDefault();
    //it prevents auto-reloads
    getData();
  }
  const onChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className="Heading">
      <style>{'body { background-color: rgb(173, 230, 227); }'}</style>
      <form onSubmit={onSubmit}>
        <div className="Header">
          <h1 >Recipe Finder</h1> <br /></div>
        <input type="text" placeholder="Enter the name of Dish " autoComplete="off" onChange={onChange} value={query} />

        <input type="submit" value="Get Recipe" />


      </form>
      <h2>{recipes !== null ? "Type a Dish Name to Search for its Ingredients" : "No Data has been received"}</h2>
     { /* we are using here ternary operator to check the condition if data entered is present or not and print accordingly */}
      <div className="recipes">
        {recipes !== null && recipes?.map(recipe => <Recipe key={uuidv4} recipe={recipe} />)}
      </div>
    </div>

  );

}

export default App;
