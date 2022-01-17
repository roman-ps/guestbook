import React, {useState} from 'react';
import classes from './ReviewItem.module.css';

const ReviewItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const classIsLiked = isLiked ? classes.liked : '';
  const GENDER = {
    male: 'Мужской',
    female: 'Женский',
  };

  const clickBtnDeleteItemHandler = () => {
    props.saveId(props.id);
  };

  const clickBtnChangeLikeHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={`${classes.item} ${classIsLiked}`}>
      <button onClick={clickBtnDeleteItemHandler} className={classes.btn}>Удалить</button>
      <button onClick={clickBtnChangeLikeHandler} className={classes.btnLike}>Лайкнуть</button>
      <div className={classes.left}>
        <p className={classes.name}>{props.name}</p>
        <p>Пол: {GENDER[props.gender] || 'Нипонятна'}</p>
        <p>Возраст: {props.age}</p>
        <p>Город: {props.city}</p>
      </div>
      <div className={classes.right}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
