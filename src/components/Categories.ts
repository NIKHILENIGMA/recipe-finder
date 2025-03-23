export function Categories(): HTMLElement {
  const category = document.createElement("section");

  category.className = "container mx-auto px-4 py-6 mt-6";

  category.innerHTML = `
            <div class="flex justify-between items-center mb-3">
                <h2 class="text-lg font-semibold">Categories</h2>
                <a href="#" class="text-orange-500 text-sm">See All</a>
            </div>
            <div class="flex gap-3 overflow-x-auto">
                <button class="bg-gray-200 px-4 py-2 rounded-full text-sm">Breakfast</button>
                <button class="bg-gray-200 px-4 py-2 rounded-full text-sm">Dessert</button>
                <button class="bg-gray-200 px-4 py-2 rounded-full text-sm">Lunch</button>
            </div>
        `;
  return category;
}
