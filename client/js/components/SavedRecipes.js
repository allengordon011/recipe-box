import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/actions';

class SavedRecipes extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(actions.fetchSavedRecipesRequest())
    }
    render() {
        console.log('saved recipes props: ', this.props)
        // let savedRecipesArray = this.props.savedRecipes;
        // let count = 0;
        // let earnedStickers = stickersArray.length <= 1 ? "Loading..." : stickersArray.map((sticker, i) => {
        //     count++;
        //     if(sticker.earned == true){
        //         return (
        //             <div key={i}>
        //                 <img className='earned-sticker' src={sticker.sticker} />
        //             </div>
        //        )}
        // })

          return (
              <div>
                  <h3 className="saved-recipes-title">Saved Recipes</h3>
                  <p className="saved-recipes-subtitle">Save your favorite recipes here!</p>
                  {/* {earnedStickers} */}
              </div>
          );
      }
}

const mapStateToProps = (state, props) => ({savedRecipes: state.savedRecipes})

export default connect(mapStateToProps)(SavedRecipes);
