import React from 'react';
import classes from './Form.module.css';
import {renderData, getNextId} from './../../index';

const Form = (props) => {
  const addReview = (evt) => {
    evt.preventDefault();
    const newReview = {
      id: getNextId(),
      name: evt.target.name.value,
      mail: evt.target.mail.value,
      city: evt.target.city.value,
      text: evt.target.text.value,
    }

    props.data.push(newReview);
    renderData();
  };

  return (
    <form className={classes.container} action='' method='POST' onSubmit={addReview}>
      <div className={classes.item}>
        <label htmlFor='name'>Имя: </label>
        <input className={classes.name} placeholder='Ваше имя' type='text' id='name' minLength='3' required />
      </div>
      <div className={classes.item}>
        <label htmlFor='mail'>Почта: </label>
        <input placeholder='Ваша почта' type='email' id='mail' required />
      </div>
      <div className={classes.item}>
        <label htmlFor='city'>Город: </label>
        <input placeholder='Откуда вы' type='text' id='city' required />
      </div>
      <div className={classes.item}>
        <label htmlFor='text'>Текст: </label>
        <textarea placeholder='Напишите свой отзыв' id='text' minLength='5' required />
      </div>
      <button className={classes.btn} type='submit'>Добавить отзыв</button>
    </form>
  );
};

export default Form;
