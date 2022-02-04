import React from 'react';
import classes from './Filter.module.css';
import {AgeValues, GenderValues} from 'constants/const';

const Filter = (props) => {
  const toggleGenderFilterHandler = (evt) => {
    props.selectGenderFilterHandler(evt.target.value);
  };

  const toggleAgeFilterHandler = (evt) => {
    props.selectAgeFilterHandler(evt.target.value);
  };

  const toggleLikeChangeHandler = (evt) => {
    props.checkedLikeHandler(evt.target.checked);
  };

  const ageOptions = AgeValues.map((key) => <option value={key.value}>{key.content}</option>);

  const genderOptions = GenderValues.map((key) => <option value={key.value}>{key.content}</option>);

  return (
    <div className={classes.filter}>
      <div className={classes['filter-container']}>
        <p className={classes.title}>Пол</p>
        <select name='select' onChange={toggleGenderFilterHandler}>
          {genderOptions}
        </select>
      </div>
      <div className={classes['filter-container']}>
        <label htmlFor='liked'>
          <input name='checked' type='checkbox' value='false' id="liked" onChange={toggleLikeChangeHandler} />Лайк
        </label>
      </div>
      <div className={classes['filter-container']}>
        <p className={classes.title}>Возраст</p>
        <select name='select' onChange={toggleAgeFilterHandler}>
          {ageOptions}
        </select>
      </div>
    </div>
  )
};

export default Filter;
