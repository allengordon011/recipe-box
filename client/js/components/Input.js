import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.fetchRecipes = this.fetchRecipes.bind(this);
        // this.focus = this.focus.bind(this);

    }

    componentDidMount() {
        this.textInput.focus();
  }

    fetchRecipes(event) {
        event.preventDefault();
        const text = this.textInput.value;
        let ingredients = text.replace(/\s/g,',');
        this.props.dispatch(actions.fetchRecipes(ingredients))
        console.log('fired off fetchRecipesRequest')
        this.textInput.value = '';
    }

  render() {
        return (
            <div className="form-container">
                <form className="input-form" onSubmit={this.fetchRecipes}>
                        <label htmlFor="inputSuccess">Search by ingredients or by recipe name</label>
                            <input type="text" className="input-input" id="inputSuccess" ref={input => this.textInput = input} placeholder="press enter or click submit"/>
                        <RaisedButton label="Submit" type="submit" className="submit-button"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({recipes: state.recipes})

export default connect(mapStateToProps)(Input);
