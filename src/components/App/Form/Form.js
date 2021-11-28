import React, {useState} from 'react';
import classes from './Form.module.css';

const Form = (props) => {
  const [enterName, setEnterName] = useState('');
  const [enterMail, setEnterMail] = useState('');
  const [enterCity, setEnterCity] = useState('');
  const [enterText, setEnterText] = useState('');
  const [enterSex, setEnterSex] = useState('');

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    const newReview = {
      name: enterName,
      mail: enterMail,
      city: enterCity,
      text: enterText,
      sex: enterSex,
    };

    props.saveData(newReview);
    setEnterName('');
    setEnterMail('');
    setEnterCity('');
    setEnterText('');
    setEnterSex('');
  };

  const nameInputHandler = (evt) => {
    setEnterName(evt.target.value);
  };

  const mailInputHandler = (evt) => {
    setEnterMail(evt.target.value);
  };

  const sexInputHandler = (evt) => {
    setEnterSex(evt.target.value);
  };

  const cityInputHandler = (evt) => {
    setEnterCity(evt.target.value);
  };

  const textInputHandler = (evt) => {
    setEnterText(evt.target.value);
  };

  return (
    <form className={classes.container} action='' method='POST' onSubmit={formSubmitHandler}>
      <div className={classes.item}>
        <label htmlFor='name'>Имя: </label>
        <input value={enterName} onChange={nameInputHandler} placeholder='Ваше имя' className={classes.name} type='text' id='name' minLength='3' required />
      </div>
      <div className={classes.item}>
        <label htmlFor='mail'>Почта: </label>
        <input value={enterMail} onChange={mailInputHandler} placeholder='Ваша почта' type='email' id='mail' required />
      </div>

      <div className={classes.item}>
      <label htmlFor='select'>Пол: </label>
        <select name='select' onChange={sexInputHandler}>Пол:
          <option value=''></option>
          <option value='Мужской'>Мужской</option>
          <option value='Женский'>Женский</option>
        </select>
      </div>


      <div className={classes.item}>
        <label htmlFor='city'>Город: </label>
        <input value={enterCity} onChange={cityInputHandler} placeholder='Откуда вы' type='text' id='city' required />
      </div>
      <div className={classes.item}>
        <label htmlFor='text'>Текст: </label>
        <textarea value={enterText} onChange={textInputHandler} placeholder='Напишите свой отзыв' id='text' minLength='5' required />
      </div>
      <button className={classes.btn} type='submit'>Добавить отзыв</button>
    </form>
  );
};

export default Form;