import { useEffect, useRef, useState } from 'react';
import Resipes from './Recipe';
import { ReactComponent as SearchIcon } from './search.svg';
import './App.css';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState();
  const valueRef = useRef();

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_MY_ID}&app_key=${process.env.REACT_APP_MY_KEY}`);
    const data = await response.json();
    console.log(data.hits)

    setRecipes(data.hits);
  }

  const handleClick = e => {
    e.preventDefault();
    setQuery(valueRef.current.value)
  }

  return (
    <div className="App">
      <div className="pt-2 mt-4 relative mx-auto text-gray-600 inputForm">
        <input type="search" name="serch" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" ref={valueRef} /> 
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4" onClick={handleClick}>
          
          <SearchIcon className="text-gray-600 h-4 w-4 fill-current" />
        </button>
      </div>
      <div className="recipes">
      {recipes.map(recipes => (
        <Resipes key={recipes.recipe.totalWeight} title={recipes.recipe.label} calories={recipes.recipe.calories} image={recipes.recipe.image} ingredients={recipes.recipe.ingredients} />
      ))}
      </div>
    </div>
  );
}

export default App;
