import React from 'react';

import Header from './Header';
import Input from './Input';
import RecipesList from './RecipesList';
import SavedRecipes from './SavedRecipes';
import ViewSavedButton from './ViewSavedButton';


function App() {
    return (
        <div className="flex-container">
            <div className="main">
                <Header />
                <h1 className="title">Recipe Blender</h1>
                <hr />
                <Input />
                <hr />
                <RecipesList />
            </div>
            <div className="sidebar">
                <ViewSavedButton />
                <SavedRecipes />
            </div>
        </div>
    )
}

export default App;
