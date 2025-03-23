import { Recipe } from '../types/recipe';
import { router } from '../main'; // We'll define this in main.ts

export function RecipeCard(recipe: Recipe): HTMLElement {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  
  card.innerHTML = `
    <img src="${recipe.image || '/images/recipe-placeholder.jpg'}" alt="${recipe.title}">
    <h3>${recipe.title}</h3>
    <p>Ready in ${recipe.readyInMinutes} minutes | Serves ${recipe.servings}</p>
  `;
  
  card.addEventListener('click', () => {
    router.navigate(`/recipes/${recipe.id}`);
  });
  
  return card;
}