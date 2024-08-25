import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Action to set the search term
  setSearchTerm: (term) =>
    set((state) => {
      const searchTerm = term.toLowerCase();
      return {
        searchTerm,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchTerm)
        ),
      };
    }),

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm)
      ),
    })),

  // Action to update recipes when needed
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm)
      ),
    })),
}));

export default useRecipeStore;
