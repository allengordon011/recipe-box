import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.fetchRecipes = this.fetchRecipes.bind(this);
    }
    fetchRecipes(event) {
        event.preventDefault();
        const ingredients = this.textInput.value;
        //break down ingredients to strings
        this.props.dispatch(actions.fetchRecipes(ingredients))
        console.log('fired off fetchRecipesRequest', ingredients)
        this.textInput.value = '';
    }

  render() {
        return (
            <div className="container">
                <form className="input-form" onSubmit={this.fetchRecipes}>
                    <div>
                        <label htmlFor="inputSuccess">Search</label>
                        <div>
                            <input type="text" className="input-input" id="inputSuccess" ref={input => this.textInput = input} placeholder="type in your ingredients and press enter"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({recipes: state.recipes})

export default connect(mapStateToProps)(Input);
