import React, {useState} from 'react';
import classes from './ReviewItem.module.css';

const ReviewItem = (props) => {
  const [theme, setTheme] = useState('white');
  const [colorText, setColorText] = useState('black');
  const [colorBorder, setColorBorder] = useState('black');

  const clickBtnDeleteItemHandler = () => {
    props.saveId(props.id);
  };

  const clickBtnChangeThemeHandler = () => {
    setTheme(theme === 'white' ? 'black' : 'white');
    setColorText(colorText === 'black' ? 'white' : 'black');
    setColorBorder(colorBorder === 'black' ? 'grey' : 'black');
  };

  return (
    <div className={classes.item} style={{backgroundColor: theme, color: colorText, borderColor: colorBorder}}>
      <button onClick={clickBtnDeleteItemHandler} className={classes.btn}>Удалить</button>
      <button onClick={clickBtnChangeThemeHandler} className={classes.btnTheme}>Поменять тему</button>
      <div className={classes.left} style={{borderColor: colorBorder}}>
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
