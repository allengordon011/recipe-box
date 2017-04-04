import {combineReducers} from 'redux';
// import {routerReducer} from 'react-router-redux';

import recipes from './recipes';
import savedRecipes from './savedRecipes';

const rootReducer = combineReducers({recipes, savedRecipes});
//, routing:routerReducer

export default rootReducer;
