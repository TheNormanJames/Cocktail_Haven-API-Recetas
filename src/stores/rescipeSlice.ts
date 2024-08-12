import { StateCreator } from 'zustand';
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from '../services/RecipeService';
import { Categories, Drink, Drinks, SearchFilter } from '../types';

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  fetchCategories: () => Promise<void>;
  searchRecipes: (SearchFilters: SearchFilter) => Promise<void>;
  selectRecipes: (id: Drink['idDrink']) => Promise<void>;
};

export const createRecipesSlices: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipes: async (filters) => {
    const drinks = await getRecipes(filters);
    set({
      drinks,
    });
  },
  selectRecipes: async (id) => {
    const selectRecipe = await getRecipeById(id);
    console.log(selectRecipe);
  },
});
