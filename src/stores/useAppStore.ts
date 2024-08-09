import { create } from 'zustand';
import { createRecipesSlices, RecipeSliceType } from './rescipeSlice';

export const useAppStore = create<RecipeSliceType>((...a) => ({
  ...createRecipesSlices(...a),
}));
