import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';
import StarRater from './Star-Rater';

class SavedRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
    }
    changeRating(rating, id, event) {
        console.log('id: ', id)
        //  this.props.savedRecipes.savedRecipes)
        console.log('RATING? ', rating)

        this.props.dispatch(actions.rateRecipe(id, rating));
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
                        My Rating: <StarRater rating={recipe.rating} id={recipe._id}
                           onChange={this.changeRating}/>
                        <RaisedButton label="Make this Recipe" className="recipe-button" onClick={() => {
                            window.open(recipe.recipe.url);}} />                          <RaisedButton label="Delete this Recipe" className="recipe-button" onClick={() => {this.props.dispatch(actions.deleteSavedRecipe(recipe._id));}} />
                    </section>
                </div>
               )
           })

        if(this.props.savedRecipes.hidden === false) {
        return (
            <div className="saved-recipes-box">
                <h3 className="recipes-title">Saved Recipes</h3>
                <div className="saved-recipes-list">
                {savedRecipes}
                </div>
            </div>
            );
        } else { return <div></div>
        }
    }
}

const mapStateToProps = (state, props) => ({savedRecipes: state.savedRecipes})

export default connect(mapStateToProps)(SavedRecipes);
