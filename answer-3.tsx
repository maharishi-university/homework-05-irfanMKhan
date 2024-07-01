type Recipe = {
  id: number;
  title: string;
  description: string;
};

type RecipeResponse = {
  recipes: Recipe[];
};

(async () => {
  const url = "https://dummyjson.com/recipes";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: RecipeResponse = await response.json();

    const recipeNames = data.recipes.map((recipe) => recipe.title);
    console.log("Recipe Names:", recipeNames);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
})();
