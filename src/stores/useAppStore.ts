import { create } from 'zustand';
import { createRecipesSlices, RecipeSliceType } from './rescipeSlice';
import { devtools } from 'zustand/middleware';

export const useAppStore = create<RecipeSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlices(...a),
  }))
);
