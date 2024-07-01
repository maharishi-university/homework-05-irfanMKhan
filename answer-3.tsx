type Recipe = {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number
  tags: string[]
  userId: number
  image: string
  rating: number
  reviewCount: number
  mealType: string[]
};

type RecipeResponse = {
  recipes: Recipe[]
  total: number
  skip: number
  limit: number
};

(async () => {
  const url = "https://dummyjson.com/recipes";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: RecipeResponse = await response.json();

    const recipeNames = data.recipes.map((recipe) => recipe.name);
    console.log("Recipe Names:", recipeNames);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
})();
