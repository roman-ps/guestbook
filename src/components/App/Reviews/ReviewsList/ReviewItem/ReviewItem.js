import React, {useState} from 'react';
import classes from './ReviewItem.module.css';

const ReviewItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const classIsLiked = isLiked ? classes.liked : '';

  const GenderType = {
    male: 'Мужской',
    female: 'Женский',
  };

  const GenderClasses = {
    male: classes['gender-male'],
    female : classes['gender-female'],
    unknown: classes['gender-unknown'],
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
        <p className={GenderClasses[props.gender] || GenderClasses.unknown}>Пол: {GenderType[props.gender] || 'Неизвестный'}</p>
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
