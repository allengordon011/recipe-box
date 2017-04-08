import React from 'react';

function StarRater(props) {
    const stars = [];
    let starIcon='';
    let id = props.id;
    for (let i=0; i<5; i++) {
        let className;
        if (i < props.rating) {
            starIcon="star";
        }
        else {
            starIcon="star_border"
        }
        const star = (
            <i className="material-icons md-24" key={i} id="star-icon"
               onClick={props.onChange.bind(null, i + 1, id)}>{starIcon}
            </i>
        );
        stars.push(star);
    }

    return (
        <span className="star-rater">
            {stars}
        </span>
    );
}

StarRater.defaultProps = {
    rating: 0,
    id: ''
};

export default StarRater;
