import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(actions.fetchSavedRecipes());
    }
    render() {
        let recipesArray = this.props.recipes.recipes;

        const recipesList = recipesArray.length === 0
            ? "Loading..."
            : recipesArray.map((recipe, i) => {
                console.log('RECIPE: ', recipe)
                let title = recipe.recipe.label.toLowerCase();
                return (
                    <div className="recipe-container" key={i}>
                        <section className="recipe-box">
                            <div className="recipe-title">
                                {title}
                            </div>
                            <img className="recipe-photo" src={recipe.recipe.image} alt="Photo" />
                                <RaisedButton label="Save this Recipe" className="save-recipe-button" onClick={() => {
                                    this.props.dispatch(actions.saveRecipe(recipe.recipe.uri));
                                    //make recipe.saved === true?
                                }} />
                        </section>
                    </div>
                )
            })
        if(recipesArray.length >= 3) {
            return (
                <div className="recipes-list">
                    <h3 className="recipes-title">Delicious Recipes to Try</h3>
                    {recipesList}
                </div>
        )} else {
            return <div className="recipes-list"></div>
        }
    }
}

const mapStateToProps = (state, props) => ({recipes: state.recipes})

export default connect(mapStateToProps)(RecipesList);
