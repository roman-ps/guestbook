import React from 'react';
import ReviewItem from './ReviewItem/ReviewItem';
import classes from './ReviewsList.module.css';

const ReviewsList = (props) => {
  console.log(props.items)
  const additems = props.items;
  const elements = additems.map((elem) => {
    return <ReviewItem name={elem.name} mail={elem.mail} city={elem.city} text={elem.text} key={elem.id}/>
  });

  return (
    <div className={classes.list}>
      {elements}
    </div>
  );
};

export default ReviewsList;
