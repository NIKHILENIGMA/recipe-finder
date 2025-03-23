import { getRecipeById } from "../api/recipeService";

interface Recipe {
    id: number;
    title: string;
    image?: string;
    readyInMinutes: number;
    servings: number;
    summary: string;
    ingredients?: Ingredient[];
    instructions?: string;
}

interface Ingredient {
    amount: number;
    unit: string;
    name: string;
}


export async function RecipeDetailPage(): Promise<void> {
    const app = document.querySelector<HTMLDivElement>('#app')!;
    
    // Get recipe ID from URL
    const path = window.location.pathname;
    const id = parseInt(path.split('/').pop() || '0');
    
    app.innerHTML = '<p>Loading recipe details...</p>';
    
    const recipe = await getRecipeById(id);
    
    if (!recipe) {
      app.innerHTML = '<h1>Recipe not found</h1>';
      return;
    }
    
    app.innerHTML = `
        <div class="recipe-detail">
            <button id="back-button" class="back-button">← Back to recipes</button>
            <div class="recipe-header">
                <h1>${(recipe as Recipe).title}</h1>
                <img src="${(recipe as Recipe).image || '/images/recipe-placeholder.jpg'}" alt="${(recipe as Recipe).title}">
            </div>
            <div class="recipe-info">
                <p>Ready in ${(recipe as Recipe).readyInMinutes} minutes | Serves ${(recipe as Recipe).servings}</p>
    `;
    
    document.getElementById('back-button')?.addEventListener('click', () => {
      history.back();
    });
  }