import React from 'react';
import classes from './AddReview.module.css';

let xxx = [];
localStorage.setItem('keys', xxx);
const AddReview = () => {

  const changeStr = () => {
    const nameInput = document.querySelector('#name').value;
    // const mailInput = document.querySelector('#mail').value;
    // const cityInput = document.querySelector('#city').value;
    // const textInput = document.querySelector('#text').value;
    // const data = {id: 0, name: nameInput, mail: mailInput, city: cityInput, text: textInput};
    const data = {id: 0, name: nameInput};
    xxx.push(data);
    console.log(xxx);
    let temp = JSON.stringify(data);
    let stor = localStorage.getItem('keys');
    localStorage.setItem('keys', temp + stor);
    console.log(localStorage.getItem('keys'));
  };

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <label htmlFor='name'>Имя: </label>
        <input className={classes.name} placeholder='Ваше имя' type='text' id='name' minLength='2' required/>
      </div>
      <div className={classes.item}>
        <label htmlFor='mail'>Почта: </label>
        <input placeholder='Ваша почта' type='email' id='mail' required/>
      </div>
      <div className={classes.item}>
        <label htmlFor='city'>Город: </label>
        <input placeholder='Откуда вы' type='text' id='city' required/>
      </div>
      <div className={classes.item}>
        <label htmlFor='text'>Текст: </label>
        <textarea placeholder='Напишите свой отзыв' id='text' minLength='5' required/>
      </div>
      <button onClick={changeStr} className={classes.btn} type='button'>Добавить отзыв</button>
    </div>
  );
};

export default AddReview;
