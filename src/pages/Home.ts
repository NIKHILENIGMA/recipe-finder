const Home = () => {
  return `
    <div class="relative h-[60vh] p-4 md:p-10 text-center">
        <h1 class="absolute bottom-[12%] left-[7%] text-3xl md:text-5xl font-semibold text-white flex flex-col justify-start">
            Explore <span class="text-yellow-500 flex">Culinary Insights</span> 
        </h1>
        <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D" class="w-full h-full object-cover mt-2 rounded-lg" alt="Food Image" />  
    </div>

    <!-- Category Filters -->
    <div class="text-center my-6">
        <h2 class="text-xl font-semibold">What to <span class="text-yellow-500">Cook?</span></h2>
        <div class="flex flex-wrap justify-center gap-3 mt-4">
            <button class="px-4 py-2 bg-black text-white rounded-full text-sm">All Types</button>
            <button class="px-4 py-2 bg-gray-200 text-black rounded-full text-sm">Appetizers</button>
            <button class="px-4 py-2 bg-gray-200 text-black rounded-full text-sm">Main Courses</button>
            <button class="px-4 py-2 bg-gray-200 text-black rounded-full text-sm">Salads & Sides</button>
        </div>
    </div>

    <!-- Recipe Cards Section -->
    <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <!-- Card 1 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src="https://source.unsplash.com/400x300/?salad" alt="Salad" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold">Fresh Salad with Tahini Sauce</h3>
                    <p class="text-gray-500 text-sm mt-1">🥗 250+ saves</p>
                    <button class="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm w-full">
                        See Complete Recipe
                    </button>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src="https://source.unsplash.com/400x300/?nachos" alt="Chili con Carne" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold">Chili con Carne with Nachos Chips</h3>
                    <p class="text-gray-500 text-sm mt-1">🌮 150+ saves</p>
                    <button class="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm w-full">
                        See Complete Recipe
                    </button>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src="https://source.unsplash.com/400x300/?kimchi" alt="Kimchi" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold">Sour & Spicy Korean Kimchi</h3>
                    <p class="text-gray-500 text-sm mt-1">🇰🇷 200+ saves</p>
                    <button class="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm w-full">
                        See Complete Recipe
                    </button>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src="https://source.unsplash.com/400x300/?noodles" alt="Noodles" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold">Flat Noodles with Shrimp Veggie</h3>
                    <p class="text-gray-500 text-sm mt-1">🍜 200+ saves</p>
                    <button class="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm w-full">
                        See Complete Recipe
                    </button>
                </div>
            </div>

            <!-- Card 5 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src="https://source.unsplash.com/400x300/?pasta" alt="Pasta" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold">Classic Italian Beef Maltagliati</h3>
                    <p class="text-gray-500 text-sm mt-1">🍝 Timeless favorite</p>
                    <button class="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm w-full">
                        See Complete Recipe
                    </button>
                </div>
            </div>

            <!-- Card 6 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src="https://source.unsplash.com/400x300/?cauliflower" alt="Cauliflower Steak" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold">Cauliflower Steak Chimichurri Spices</h3>
                    <p class="text-gray-500 text-sm mt-1">🥦 150+ saves</p>
                    <button class="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm w-full">
                        See Complete Recipe
                    </button>
                </div>
            </div>

        </div>
    </div>
  `;
};

export default Home;
