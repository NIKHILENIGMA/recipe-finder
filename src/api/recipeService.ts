const API_BASE_URL = import.meta.env.VITE_SPOONACULAR_API_BASE_URL;
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

const options = (method: string) => ({
  method,
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY,
  },
});

export async function getRecipes(query: string) {
  const url = `${API_BASE_URL}/recipes/?q=${query}`;

  const response = await fetch(url, options("GET"));
  const data = await response.json();
  return data;
}

export async function getRecipeById(id: number) {
  const url = `${API_BASE_URL}/recipes/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
