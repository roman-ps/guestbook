import React from 'react';
import classes from './ReviewsList.module.css';
import ReviewItem from './ReviewItem/ReviewItem';

const ReviewsList = (props) => {
  const additems = props.data;
  console.log(props)
  const elements = additems.map((elem, index) => {
    return <ReviewItem name={elem.name} mail={elem.mail} city={elem.city} text={elem.text} key={index}/>
  });

  return (
    <div>
      <h2 className={classes.title}>Reviews List</h2>
      {elements}
    </div>
  );
};

export default ReviewsList;
