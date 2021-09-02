import React from 'react';
import classes from './ReviewsList.module.css';
import ReviewItem from './ReviewItem/ReviewItem';

const ReviewsList = () => {
  return (
    <div>
      <h2 className={classes.title}>Reviews List</h2>
      <ReviewItem />
    </div>
  );
};

export default ReviewsList;
