import React from 'react';
import ReviewItem from './ReviewItem/ReviewItem';
import classes from './ReviewsList.module.css';

const ReviewsList = (props) => {
  const dataItems = props.items;
  let elements = <p>Ничего не найдено</p>;

  const onSaveId = (id) => {
    props.passIdInReviews(id);
  }

  if (dataItems.length > 0) {
    elements = dataItems.map((elem) => (
    <ReviewItem saveId={onSaveId} name={elem.name} mail={elem.mail} city={elem.city} text={elem.text} key={elem.id} id={elem.id} sex={elem.sex} />
    ))
  };

  return (
    <div className={classes.list}>
      {elements}
    </div>
  );
};

export default ReviewsList;
