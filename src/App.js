import React ,{useState} from 'react';
import './App.css';
import Recipe from './component/Recipe';
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';


function App() {
  const[query,setQuery]= useState("");
  const [recipes,setRecipes]=useState([]);




  const URL=`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const getData= async()=>{
    try{
    const result=await Axios.get(URL);
   /*  if(result.data.meals===null) */
    setRecipes(result.data.meals)
   
    console.log(result.data);
    setQuery("");
    }catch(error){
      console.error();
      
    }
  

  };
  const onSubmit=(e)=>{
     e.preventDefault();
     getData();
  }
  const onChange =(e)=>{
   setQuery(e.target.value);
  }
  
  return (
    <div className="Heading">
     <style>{'body { background-color: rgb(173, 230, 227); }'}</style>
      <form onSubmit={onSubmit}>
        <div className="Header">
   <h1 >Recipe Finder</h1> <br/></div>
    <input type="text" placeholder="Enter the name of Dish " autoComplete="off" onChange={onChange} value={query}/>
    
    <input type="submit" value="Get Recipe" />


   </form>
   <h2>{recipes!==null?"Type a Dish Name to Search for its Ingredients":"no data found"}</h2>

   <div className="recipes">
     {recipes!==null && recipes?.map(recipe=><Recipe key={uuidv4} recipe={recipe}/>)} 
   </div>
    </div>
  
  );
  
  }

export default App;
