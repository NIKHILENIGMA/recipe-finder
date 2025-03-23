export function PopularRecipes(): HTMLElement {
  const popular = document.createElement("section");

  popular.className = "container mx-auto px-4 py-6 mt-6";
  popular.innerHTML = `
    <section class="mt-6">
    <div class="flex justify-between items-center mb-3">
        <h2 class="text-lg font-semibold">Popular Recipes</h2>
        <a href="#" class="text-orange-500 text-sm">See All</a>
    </div>

    <!-- Recipe Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Recipe Card 1 -->
        <div class="bg-white rounded-lg shadow-md p-3">
            <img src="https://plus.unsplash.com/premium_photo-1661771822467-e516ca075314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D" alt="Recipe" class="w-full h-40 object-cover rounded-lg">
            <div class="mt-3">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                    ⭐ 4.8 (1k+ Reviews)
                </div>
                <h3 class="font-semibold mt-1">Burst Tomato Pasta</h3>
                <p class="text-xs text-gray-500">⏳ 35 min • Easy • by Arlene McCoy</p>
            </div>
        </div>

        <!-- Recipe Card 2 -->
        <div class="bg-white rounded-lg shadow-md p-3">
            <img src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D" alt="Recipe" class="w-full h-40 object-cover rounded-lg">
            <div class="mt-3">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                    ⭐ 4.6 (900+ Reviews)
                </div>
                <h3 class="font-semibold mt-1">Grilled Chicken Salad</h3>
                <p class="text-xs text-gray-500">⏳ 25 min • Medium • by John Doe</p>
            </div>
        </div>

        <!-- Recipe Card 3 -->
        <div class="bg-white rounded-lg shadow-md p-3">
            <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D" alt="Recipe" class="w-full h-40 object-cover rounded-lg">
            <div class="mt-3">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                    ⭐ 4.9 (2k+ Reviews)
                </div>
                <h3 class="font-semibold mt-1">Chocolate Cake</h3>
                <p class="text-xs text-gray-500">⏳ 50 min • Hard • by Emily R.</p>
            </div>
        </div>

        <!-- Recipe Card 4 -->
        <div class="bg-white rounded-lg shadow-md p-3">
            <img src="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Recipe" class="w-full h-40 object-cover rounded-lg">
            <div class="mt-3">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                    ⭐ 4.7 (1.5k+ Reviews)
                </div>
                <h3 class="font-semibold mt-1">Avocado Toast</h3>
                <p class="text-xs text-gray-500">⏳ 15 min • Easy • by Sarah K.</p>
            </div>
        </div>
    </div>
</section>`;

    return popular;
}
