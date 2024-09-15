import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Recipe Sharing Platform
          </h1>
          {/* Define Routes */}
          <Routes>
            {/* Home Page showing all recipes */}
            <Route path="/" element={<HomePage />} />

            {/* Recipe Detail page that shows a recipe based on its ID */}
            <Route path="/recipe/:id" element={<RecipeDetail />} />

            {/* Add Recipe Form page for adding a new recipe */}
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
