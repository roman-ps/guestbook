import React from 'react';
import classes from './Form.module.css';
import {renderData, getLastId} from './../../index';

const Form = (props) => {
  const name = React.createRef();
  const mail = React.createRef();
  const city = React.createRef();
  const text = React.createRef();

  const addReview = () => {
    const newReview = {
      id: getLastId(),
      name: name.current.value,
      mail: mail.current.value,
      city: city.current.value,
      text: text.current.value,
    }

    props.data.push(newReview);
    renderData();
  };

  return (
    <form className={classes.container}>
      <div className={classes.item}>
        <label htmlFor='name'>Имя: </label>
        <input className={classes.name} placeholder='Ваше имя' type='text' id='name' minLength='3' required ref={name}/>
      </div>
      <div className={classes.item}>
        <label htmlFor='mail'>Почта: </label>
        <input placeholder='Ваша почта' type='email' id='mail' required ref={mail}/>
      </div>
      <div className={classes.item}>
        <label htmlFor='city'>Город: </label>
        <input placeholder='Откуда вы' type='text' id='city' required ref={city}/>
      </div>
      <div className={classes.item}>
        <label htmlFor='text'>Текст: </label>
        <textarea placeholder='Напишите свой отзыв' id='text' minLength='5' required ref={text}/>
      </div>
      <button onClick={addReview} className={classes.btn} type='button'>Добавить отзыв</button>
    </form>
  );
};

export default Form;
