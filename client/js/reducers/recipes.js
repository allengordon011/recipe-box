import * as actions from '../actions/actions';

const initialState = {
    recipes: []
};

const recipes = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_RECIPES_REQUEST:
            {
                console.log('Fetch recipes request');
                return {
                    ...state
                    //loading
                }
            }
        case actions.FETCH_RECIPES_SUCCESS:
            {
                console.log('Fetch recipes success');
                return {
                    ...state,
                    recipes: action.recipes
                }
            }
        case actions.FETCH_ERROR:
            {
                return {
                    ...state,
                    recipes: action.error
                }
            }
            default:
                return state;
    }
}

export default recipes;
