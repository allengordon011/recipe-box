import 'isomorphic-fetch'

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST
})

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const fetchRecipesSuccess = recipes => ({
  type: FETCH_RECIPES_SUCCESS,
  recipes
})

// export const SAVE_RECIPE = 'SAVE_RECIPE';
// export const saveRecipe = recipe => ({
//   type: SAVE_RECIPE,
//   recipe
// })

export const FETCH_SAVED_RECIPES_REQUEST = 'FETCH_SAVED_RECIPES_REQUEST';
export const fetchSavedRecipesRequest = () => ({
  type: FETCH_SAVED_RECIPES_REQUEST
  //loading
})

export const FETCH_SAVED_RECIPES_SUCCESS = 'FETCH_SAVED_RECIPES_SUCCESS';
export const fetchSavedRecipesSuccess = savedRecipes => ({
  type: FETCH_SAVED_RECIPES_SUCCESS,
  savedRecipes
})

export const HIDE_SAVED_RECIPES = 'HIDE_SAVED_RECIPES';
export const hideSavedRecipes = () => ({
  type: HIDE_SAVED_RECIPES
})

export const FETCH_ERROR = 'FETCH_GOALS_ERROR';
export const fetchError = error => ({
  type: FETCH_ERROR,
  error
})

const recipesUrl = "https://api.edamam.com/search?app_id=ed380f4b&app_key=f3802ba6790fd75d04160d5c82da4433&from=0&to=3&q="

export const fetchRecipes = (ingredients) => dispatch => {
    dispatch(fetchRecipesRequest())
    fetch(recipesUrl + ingredients)
      .then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    }).then(response => response.json()).then(json =>  dispatch(fetchRecipesSuccess(json.hits))).catch(error => dispatch(fetchError(error)));
};

const savedRecipesUrl = `/api/`;

export const fetchSavedRecipes = () => dispatch => {
    dispatch(fetchSavedRecipesRequest())
    return fetch(savedRecipesUrl)
    .then(response => {
        if (!response.ok) {
          const error = new Error(response.statusText)
          error.response = response
          throw error;
        }
        return response;
      })
      .then(response => response.json())
      .then(json => dispatch(fetchSavedRecipesSuccess(json)))
      .catch(error => dispatch(fetchError(error)))
};

export const postRecipe = (recipe) => dispatch => {
    // dispatch(saveRecipe())
    return fetch(savedRecipesUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              recipe
            })
      })
  .then(response => response.json())
  .then(json => dispatch(fetchSavedRecipesSuccess(json)))
}

export const deleteSavedRecipe = (id) => dispatch => {
    return fetch(savedRecipesUrl + id, {
    method: 'DELETE'
    })
    .then(() => dispatch(fetchSavedRecipes()))
}
