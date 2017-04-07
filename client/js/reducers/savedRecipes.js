import * as actions from '../actions/actions';

const initialState = {
    savedRecipes: [],
    hidden: true
};

const savedRecipes = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_SAVED_RECIPES_REQUEST:
            {
                console.log('Fetch saved recipes request');
                return {
                    ...state,
                    hidden: false
                }
            }
        case actions.FETCH_SAVED_RECIPES_SUCCESS:
            {
                console.log('Fetch saved recipes success');
                return {
                    ...state,
                    savedRecipes: action.savedRecipes
                }
            }
        case actions.HIDE_SAVED_RECIPES: {
            return {
                ...state,
                hidden: true
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
