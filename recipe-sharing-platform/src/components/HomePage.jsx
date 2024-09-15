import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json"; // Assuming the recipe data is stored in a local JSON file

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the recipes from the local JSON file (or API if needed)
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center my-6">
        <h1 className="text-3xl font-bold">Recipe List</h1>
        <Link to="/add-recipe">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
            Add New Recipe
          </button>
        </Link>
      </div>

      {/* Recipe Cards in a Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`}>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
