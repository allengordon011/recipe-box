import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';

class SavedRecipes extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentWillMount() {
    //     this.props.dispatch(actions.fetchSavedRecipes());
    // }
    render() {
        console.log('saved recipes props: ', this.props)
        let savedRecipesArray = this.props.savedRecipes.savedRecipes;
        const savedRecipes = savedRecipesArray.length < 1 ? "Loading..." : savedRecipesArray.map((recipe, i) => {
            console.log('saved RECIPE: ', recipe)
            // let title = recipe.recipe.label.charAt(0).toUpperCase() + recipe.recipe.label.toLowerCase().slice(1);
            return (
                <div className="recipe-container" key={i}>
                    <section className="recipe-box">
                        <div className="recipe-title">
                            {recipe.recipe.title}
                        </div>
                        <img className="recipe-photo" src={recipe.recipe.image} alt="Photo" />
                            <RaisedButton label="Delete this Recipe" className="delete-recipe-button" onClick={() => {
                                this.props.dispatch(actions.deleteSavedRecipe(recipe.recipe._id));
                                //make recipe.saved === true?
                            }} />
                    </section>
                </div>
               )
           })

        if(this.props.savedRecipes.hidden === false) {
        return (
            <div>
                <h3 className="saved-recipes-title">Saved Recipes</h3>
                <p className="saved-recipes-subtitle">Your favorite recipes!</p>
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
