import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <FavoritesList /> {/* Display the FavoritesList */}
        <RecommendationsList /> {/* Display the RecommendationsList */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
