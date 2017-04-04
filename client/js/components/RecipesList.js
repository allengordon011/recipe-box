import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(actions.fetchSavedRecipes());
    }
    render() {
        console.log('fetched recipes props: ', this.props)
        let recipesArray = this.props.recipes.recipes;

        const recipesList = recipesArray.length === 0
            ? "Loading..."
            : recipesArray.map((recipe, i) => {

                return (
                    <div className="recipe-container" key={i}>
                        <section className="recipe-box">
                            <div className="recipe-text">
                                {recipe.title}
                            </div>
                                <button className="save-recipe-button" onClick={() => {
                                    this.props.dispatch(actions.saveRecipe(recipe.recipe_id));
                                    //make recipe.saved === true?
                                }}>
                                    Save this Recipe</button>
                        </section>
                    </div>
                )
            })

        return (
            <div className="recipes-list">
                <h3>Delicious Recipes to Try</h3>
                {recipesList}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({recipes: state.recipes})

export default connect(mapStateToProps)(RecipesList);
