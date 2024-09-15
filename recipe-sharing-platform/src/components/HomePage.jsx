import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipeData from "../data.json"; // Adjust the path to your data.json file

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch the recipe data on component mount
  useEffect(() => {
    setRecipes(recipeData); // In a real app, you would fetch this from an API
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Wrap the image and title in a Link */}
            <Link to={`/recipe/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
