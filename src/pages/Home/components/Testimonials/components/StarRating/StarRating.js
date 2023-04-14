import React from 'react';
import "./StarRating.css";

const StarRating = ({rating}) => {

    const fullStar = "★";
    const emptyStar = "☆";

    const stars = [0, 0, 0, 0, 0].fill(fullStar, 0, rating);
    if (rating < 5) {
        stars.fill(emptyStar, rating, 5);
    }

    return <span className="RatingGroup">
        {stars.map((star, index) => <React.Fragment key={index}>{star}</React.Fragment>)}
    </span>
};
export default StarRating;