import * as actions from '../actions/actions';

const initialState = {
    savedRecipes: []
};

const savedRecipes = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_SAVED_RECIPES_REQUEST:
            {
                console.log('Fetch saved recipes request');
                return {
                    ...state,
                    savedRecipes: action.recipes
                }
            }
        case actions.FETCH_SAVED_RECIPES_SUCCESS:
            {
                console.log('Fetch saved recipes success');
                return {
                    ...state,
                    savedRecipes: action.recipes
                }
            }
        case actions.SAVE_RECIPE:
            {
                console.log('Saved recipe!');
                return {
                    ...state,
                    savedRecipes: action.recipes
                }
            }
        case actions.FETCH_ERROR:
            {
                return {
                    ...state,
                    savedRecipes: action.error
                }
            }
            default:
                return state;
    }
}

export default savedRecipes;
