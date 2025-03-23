import { getRecipes } from "../api/recipeService";
import { RecipeCard } from "../components/RecipeCard";
import { Recipe } from "../types/recipe";

export async function RecipeListPage(): Promise<void> {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    <div class="recipe-list-page">
      <h1>Recipes</h1>
      <div id="search-container"></div>
      <div id="recipes-container" class="recipes-grid"></div>
    </div>
  `;

  const recipesContainer = document.getElementById("recipes-container")!;
  recipesContainer.innerHTML = "<p>Loading recipes...</p>";

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q") || "";

  const recipes: Recipe[] = await getRecipes(query);

  if (recipes.length === 0) {
    recipesContainer.innerHTML = "<p>No recipes found. Try another search.</p>";
    return;
  }

  recipesContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    recipesContainer.appendChild(RecipeCard(recipe));
  });
}
