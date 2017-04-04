import 'isomorphic-fetch'

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const fetchRecipesRequest = (ingredients) => ({
  type: FETCH_RECIPES_REQUEST,
  ingredients
})

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const fetchRecipesSuccess = recipes => ({
  type: FETCH_RECIPES_SUCCESS,
  recipes
})

export const SAVE_RECIPE = 'SAVE_RECIPE';
export const saveRecipe = recipe => ({
  type: SAVE_RECIPE,
  recipe
})

export const FETCH_SAVED_RECIPES_REQUEST = 'FETCH_SAVED_RECIPES_REQUEST';
export const fetchSavedRecipesRequest = () => ({
  type: FETCH_SAVED_RECIPES_REQUEST
})

export const FETCH_SAVED_RECIPES_SUCCESS = 'FETCH_SAVED_RECIPES_SUCCESS';
export const fetchSavedRecipesSuccess = recipes => ({
  type: FETCH_SAVED_RECIPES_SUCCESS,
  recipes
})

export const FETCH_ERROR = 'FETCH_GOALS_ERROR';
export const fetchError = error => ({
  type: FETCH_ERROR,
  error
})
