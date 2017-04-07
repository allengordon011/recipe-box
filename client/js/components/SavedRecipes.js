import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';

class SavedRecipes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let savedRecipesArray = this.props.savedRecipes.savedRecipes;
        const savedRecipes = savedRecipesArray.length < 1 ? "No Saved Recipes Yet..." : savedRecipesArray.map((recipe, i) => {
            console.log('saved RECIPE: ', recipe);
            return (
                <div className="recipe-container" key={i}>
                    <section className="recipe-box">
                        <h3 className="recipe-title">
                            {recipe.recipe.title}
                        </h3>
                        <img className="recipe-photo" src={recipe.recipe.image} alt="Photo" />
                        <RaisedButton label="Make this Recipe" className="recipe-button" onClick={() => {
                            window.open(recipe.recipe.url);}} />                          <RaisedButton label="Delete this Recipe" className="recipe-button" onClick={() => {this.props.dispatch(actions.deleteSavedRecipe(recipe._id));}} />
                    </section>
                </div>
               )
           })

        if(this.props.savedRecipes.hidden === false) {
        return (
            <div>
                <h3 className="recipes-title">Saved Recipes</h3>
                <div className="saved-recipes-list">
                {savedRecipes}
                </div>
            </div>
            );
        } else { return <div className="saved-recipes-list"></div>
        }
    }
}

const mapStateToProps = (state, props) => ({savedRecipes: state.savedRecipes})

export default connect(mapStateToProps)(SavedRecipes);
