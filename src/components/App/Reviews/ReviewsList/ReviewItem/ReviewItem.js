import React, {useState} from 'react';
import classes from './ReviewItem.module.css';

const ReviewItem = (props) => {
  const [nightTheme, setNightTheme] = useState(false);
  const classNightTheme = nightTheme ? classes.night : '';

  const clickBtnDeleteItemHandler = () => {
    props.saveId(props.id);
  };

  const clickBtnChangeThemeHandler = () => {
    setNightTheme(!nightTheme);
  };

  return (
    <div className={`${classes.item} ${classNightTheme}`}>
      <button onClick={clickBtnDeleteItemHandler} className={classes.btn}>Удалить</button>
      <button onClick={clickBtnChangeThemeHandler} className={classes.btnTheme}>Поменять тему</button>
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
