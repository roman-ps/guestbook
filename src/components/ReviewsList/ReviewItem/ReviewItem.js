import React from 'react';
import classes from './ReviewItem.module.css';

const ReviewItem = (props) => {
  return (
    <div className={classes.item}>
      <button className={classes.btn}>Закрыть</button>
      <div className={classes.left}>
        <p>{props.name}</p>
        <p>{props.mail}</p>
        <p>{props.city}</p>
      </div>
      <div on className={classes.right}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
