import { create } from 'zustand';
import { createRecipesSlices, RecipeSliceType } from './rescipeSlice';
import { devtools } from 'zustand/middleware';
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice';
import { NotificationSlice, NotificationSliceType } from './notificationSlice';

export const useAppStore = create<
  RecipeSliceType & FavoritesSliceType & NotificationSliceType
>()(
  devtools((...a) => ({
    ...createRecipesSlices(...a),
    ...createFavoritesSlice(...a),
    ...NotificationSlice(...a),
  }))
);
