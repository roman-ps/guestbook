import React from 'react';
import classes from './ReviewItem.module.css';

const ReviewItem = () => {
  return (
    <div className={classes.item}>
      <div className={classes.left}>
        <p>Name</p>
        <p>Email</p>
        <p>City</p>
      </div>
      <div className={classes.right}>
        <p>This is text</p>
      </div>
    </div>
  );
};

export default ReviewItem;
