const API_BASE_URL = "https://api.spoonacular.com";
const API_KEY = "ba7c01a66f064c8c81b2a9f4e62df974";

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
