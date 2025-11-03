import React from "react";
import { useState } from "react";
function RecipeGenerator() {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [recipe, setRecipe] = useState('');
  const generateRecipe = async () => {
    try {
      const response = await fetch(`http://localhost:8080/recipe-creator?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`);
      const data = await response.text();
      setRecipe(data);
    } catch (error) {
      console.error('Error generating recipe:', error);
    }
  };
  return (
    <div>
      <h2>Create a Recipe</h2>
        <input type="text" placeholder="Enter ingredients(comma seperated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
        <input type="text" placeholder="Enter cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)}/>
        <input type="text" placeholder="Enter dietary restrictions" value={dietaryRestrictions} onChange={(e) => setDietaryRestrictions(e.target.value)}/>
        <button onClick={generateRecipe}>Generate Recipe</button>
        <div className="recipe-text"><pre>{recipe}</pre></div>
    </div>
  );
}

export default RecipeGenerator;
