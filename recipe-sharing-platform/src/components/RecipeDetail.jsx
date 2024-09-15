import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="mt-2 text-gray-700">{recipe.summary}</p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-600">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
          <ol className="list-decimal list-inside text-gray-600">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="mt-1">
                {step}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;
