import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';

class SavedButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.handleHideClickEvent = this.handleHideClickEvent.bind(this);

    }
    handleClickEvent() {
        this.props.dispatch(actions.fetchSavedRecipes())
        console.log('fired off fetchSavedRecipes')
    }
    handleHideClickEvent() {
        this.props.dispatch(actions.hideSavedRecipes())
        console.log('fired off hideSavedRecipes')

    }

  render() {
        return (
            <div className="view-saved-button-container">
                <RaisedButton label="View Saved Recipes" className="view-saved-recipes-button"  onClick={this.handleClickEvent} />
                <RaisedButton label="Hide Saved Recipes" className="hide-saved-recipes-button"  onClick={this.handleHideClickEvent} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({savedRecipes: state.savedRecipes})

export default connect(mapStateToProps)(SavedButtons);
