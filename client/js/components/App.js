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
                <h1 className="title">Recipe Box</h1>
                <hr />
                <Input />
                <hr />
                <RecipesList />
            </div>
            <div className="sidebar">
                <SavedButtons />
                <SavedRecipes />
            </div>
        </div>
    )
}

export default App;
