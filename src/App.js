import {useState,useEffect} from 'react';
import './App.css';
import axios from "axios";
import RecipeTile from './components/RecipeTile';

function App() {

  const [query,setQuery] = useState("")
  const [recipes,setRecipes] = useState([])
  const [healthLabel,setHealthLabel]=useState("vegan")

  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  
  async function getRecipes() {
    var result = await axios.get(url);
    setRecipes(result.data.hits) 
    console.log(result.data.hits)

  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();

  }


  return (
    <div className="App">
    <h1 onClick={getRecipes}>Food Recipe Plaza </h1>
    <form className="app__searchForm" onSubmit={onSubmit}>
        <input className="app__input" type="text" placeholder="Enter Ingrident" value={query} onChange={(e)=> setQuery(e.target.value)} />
          <input className="app__submit" type="submit" value="Search"/>
          {/* <select className='app_healthLabels'>
            <option onClick={() => setHealthLabel("vegan")}>Vegan</option>
            <option value="vegeterian" onClick={() => setHealthLabel("vegeterian")}>Vegeterian</option>
            <option onClick={() => setHealthLabel("vegan")}>Vegan</option>
            <option onClick={() => setHealthLabel("vegan")}>Vegan</option>
            <option onClick={() => setHealthLabel("vegan")}>Vegan</option>
          </select> */}
    </form>
      <div className="app_recipes">
          {
            recipes !== [] &&
            recipes.map((recipe,idx)=> {
              const food = recipe.recipe;
              console.log(food.url)
              return (
                <RecipeTile key={idx} title={food.label} url={food.image} />
              )
              })
              }
      </div>

    </div>
  );
}

export default App;
