import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(actions.fetchRecipesRequest());
    }
    render() {
        console.log('fetched recipes props: ', this.props)

        // let recipesArray = this.props.recipes;
        // let sticker = {};
        //
        // const goalsList = goalsArray.length === 0
        //     ? "Loading..."
        //     : goalsArray.map((goal, i) => {
        //         let strikeThru = goal.completed
        //             ? "strikeThru"
        //             : "";
        //         let randomize25 = Math.floor(Math.random() * 25);
        //         let stickersArray = this.props.stickers.stickers;
        //         stickersArray.length <= 1
        //             ? null
        //             : sticker = stickersArray[randomize25]
        //
        //         return (
        //             <div className="goal-container" key={i}>
        //                 <div className="goal-box" id={i}>
        //                     <div className={`goal-text ${strikeThru}`} onBlur={(event) => this.props.dispatch(actions.updateGoal(event.target.innerText, goal._id))} contentEditable='true'>{goal.goal}
        //                     </div>
        //                     <section className="buttons-group">
        //                         <button className="done" onClick={() => {
        //                             if (goal.completed === false) {
        //                                 sticker.earned = true;
        //                                 // stickersArray.push(sticker);
        //                                 this.props.dispatch(actions.earnSticker(stickersArray));
        //                             };
        //                             this.props.dispatch(actions.updateCompletedGoal(goal._id));
        //                         }}>
        //                             Done!</button>
        //                         <button className="delete" onClick={() => {
        //                             this.props.dispatch(actions.deleteGoal(goal._id))
        //                         }}>
        //                             Delete</button>
        //                     </section>
        //                 </div>
        //                     <div className="calendar">
        //                         <Calendar goal={goal.goal} />
        //                     </div>
        //             </div>
        //         )
        //     })

        return (
            <div className="recipes-list">
                <h3>Delicous Recipes to Try</h3>
                {/* {goalsList} */}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({recipes: state.recipes})

export default connect(mapStateToProps)(RecipesList);
