import React, {useState} from 'react';
import classes from './ReviewItem.module.css';

const ReviewItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const classNightTheme = isLiked ? classes.liked : '';
  const outputSex = props.gender === 'Мужской' ? 'Мужчина' : 'Женщина';

  const clickBtnDeleteItemHandler = () => {
    props.saveId(props.id);
  };

  const clickBtnChangeLikeHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={`${classes.item} ${classNightTheme}`}>
      <button onClick={clickBtnDeleteItemHandler} className={classes.btn}>Удалить</button>
      <button onClick={clickBtnChangeLikeHandler} className={classes.btnLike}>Лайкнуть</button>
      <div className={classes.left}>
        <p className={classes.name}>{props.name}</p>
        <p>Пол: {outputSex}</p>
        <p>Город: {props.city}</p>
      </div>
      <div className={classes.right}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
