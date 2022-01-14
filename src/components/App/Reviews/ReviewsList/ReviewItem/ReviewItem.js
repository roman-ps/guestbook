import React, {useState} from 'react';
import classes from './ReviewItem.module.css';

const ReviewItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const classNightTheme = isLiked ? classes.liked : '';
  const outputSex = props.sex === 'Мужской' ? 'Мужчина' : 'Женщина';

  const clickBtnDeleteItemHandler = () => {
    props.saveId(props.id);
  };

  const clickBtnChangeThemeHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={`${classes.item} ${classNightTheme}`}>
      <button onClick={clickBtnDeleteItemHandler} className={classes.btn}>Удалить</button>
      <button onClick={clickBtnChangeThemeHandler} className={classes.btnLike}>Поменять тему</button>
      <div className={classes.left}>
        <p className={classes.name}>{props.name}</p>
        {/* <p>Почта: {props.mail}</p> */}
        <p>Пол: {outputSex}</p>
        <p>Откуда: {props.city}</p>
        {/* <p>ID: {props.id}</p> */}
      </div>
      <div className={classes.right}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
