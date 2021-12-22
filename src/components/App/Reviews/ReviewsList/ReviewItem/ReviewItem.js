import React from 'react';
import classes from './ReviewItem.module.css';

const ReviewItem = (props) => {
  const clickBtnHandler = () => {
    props.saveKeyInList(props.id);
  }

  return (
    <div className={classes.item}>
      <button onClick={clickBtnHandler} className={classes.btn}>Закрыть</button>
      <div className={classes.left}>
        <p>Имя: {props.name}</p>
        <p>Почта: {props.mail}</p>
        <p>Пол: {props.sex}</p>
        <p>Город: {props.city}</p>
        <p>ID: {props.id}</p>
      </div>
      <div className={classes.right}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
