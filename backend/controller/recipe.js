const Recipe = require("../models/recipe");
const getRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  return res.json(recipes);
};

const getRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.json(recipe);
};

const addRecipe = async (req, res) => {
  const { title, ingredients, instructions, time, coverimage } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  const newRecipe = await Recipe.create({
    title,
    ingredients,
    instructions,
    time,
    coverimage,
  });
  return res.status(201).json(newRecipe);
};

const editRecipe = async (req, res) => {
  const { title, ingredients, instructions, time, coverimage } = req.body;
  let recipe = await Recipe.findById(req.params.id);
  try {
    if (recipe) {
    await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ title, ingredients, instructions, time, coverimage });
  }
  } catch (error) {
    return res.status(404).json({ message: "Recipe not found" });
  }
};

const deleteRecipe = (req, res) => {
  res.json({ message: "Hello from recipe controller" });
};

module.exports = { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe };
