import React from 'react';

import Header from './Header';
import Input from './Input';
import RecipesList from './RecipesList';
import SavedRecipes from './SavedRecipes';
import SavedButtons from './SavedButtons';


function App() {
    return (
        <div className="flex-container">
            <div className="main">
                <Header />
                <h2 className="main-title">Recipe Box</h2>
                <Input />
                <hr />
                <RecipesList />
            </div>
            <div className="saved-container">
                <SavedButtons />
                <SavedRecipes />
            </div>
        </div>
    )
}

export default App;
