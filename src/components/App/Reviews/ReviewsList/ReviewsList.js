import React from 'react';
import ReviewItem from './ReviewItem/ReviewItem';
import classes from './ReviewsList.module.css';

const ReviewsList = (props) => {
  const dataItems = props.items;
  let elements = <p>Ничего не найдено</p>;

  const onSaveId = (id) => {
    props.passIdInReviews(id);
  };

  const onGetLiked = (id) => {
    props.passLikeInReviews(id);
  };

  if (dataItems.length > 0) {
    elements = dataItems.map((elem) => (
    <ReviewItem saveId={onSaveId} getLiked={onGetLiked} name={elem.name} mail={elem.mail} city={elem.city} text={elem.text} key={elem.id} id={elem.id} gender={elem.gender} age={elem.age} liked={elem.liked}/>
    ))
  };

  return (
    <div className={classes.list}>
      {elements}
    </div>
  );
};

export default ReviewsList;
