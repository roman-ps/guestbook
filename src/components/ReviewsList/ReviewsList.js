import React from 'react';
import ReviewItem from './ReviewItem/ReviewItem';

const ReviewsList = (props) => {
  console.log(props.data)
  const additems = props.data;
  const elements = additems.map((elem, index) => {
    return <ReviewItem name={elem.name} mail={elem.mail} city={elem.city} text={elem.text} key={index}/>
  });

  return (
    <div>
      {elements}
    </div>
  );
};

export default ReviewsList;
