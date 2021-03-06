import React, {useState} from 'react';
import classes from './Form.module.css';

const Form = (props) => {
  const [enterName, setEnterName] = useState('');
  const [enterMail, setEnterMail] = useState('');
  const [enterCity, setEnterCity] = useState('');
  const [enterText, setEnterText] = useState('');
  const [enterGender, setEnterGender] = useState('');
  const [enterAge, setEnterAge] = useState('');

  const formReset = () => {
    setEnterName('');
    setEnterMail('');
    setEnterCity('');
    setEnterText('');
    setEnterGender('');
    setEnterAge('');
    props.state(false);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    const newReview = {
      name: enterName,
      mail: enterMail,
      city: enterCity,
      text: enterText,
      gender: enterGender,
      age: enterAge,
    };

    props.saveData(newReview);
    formReset();
    props.state(false);
  };

  const nameInputHandler = (evt) => {
    setEnterName(evt.target.value);
  };

  const mailInputHandler = (evt) => {
    setEnterMail(evt.target.value);
  };

  const cityInputHandler = (evt) => {
    setEnterCity(evt.target.value);
  };

  const textInputHandler = (evt) => {
    setEnterText(evt.target.value);
  };

  const genderInputHandler = (evt) => {
    setEnterGender(evt.target.value);
  };

  const ageInputHandler = (evt) => {
    setEnterAge(evt.target.value);
  }

  return (
    <form className={classes.form} action='' method='POST' onSubmit={formSubmitHandler}>
      <div className={classes.container}>
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
          <select name='select' onChange={genderInputHandler}>Пол:
            <option value=''></option>
            <option value='male'>Мужской</option>
            <option value='female'>Женский</option>
          </select>
        </div>
        <div className={classes.item}>
          <label htmlFor='city'>Город: </label>
          <input value={enterCity} onChange={cityInputHandler} placeholder='Откуда вы' type='text' id='city' required />
        </div>
        <div className={classes.item}>
          <label htmlFor='age'>Возраст: </label>
          <input value={enterAge} onChange={ageInputHandler} placeholder='Сколько вам лет' type='number' id='age' min='1' max='150' required />
        </div>
        <div className={classes.item}>
          <label htmlFor='text'>Текст: </label>
          <textarea value={enterText} onChange={textInputHandler} placeholder='Напишите свой отзыв' id='text' minLength='5' required />
        </div>
        <button className={classes.btn} type='submit'>Добавить</button>
        <button className={classes.btn} type='reset' onClick={formReset}>Отмена</button>
      </div>
    </form>
  );
};

export default Form;
