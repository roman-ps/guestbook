import React from 'react';
import classes from './Filter.module.css';
import {AgeTypes} from '../../../../const';

const Filter = (props) => {
  const toggleGenderFilterHandler = (evt) => {
    props.selectGenderFilterHandler(evt.target.value);
  };

  const toggleAgeFilterHandler = (evt) => {
    props.selectAgeFilterHandler(evt.target.value);
  };

  const toggleLikeChangeHandler = (evt) => {
    props.checkedLikeHandler(evt.target.checked)
  }

  return (
    <div className={classes.filter}>
      <div className={classes['filter-container']}>
        <p className={classes.title}>Пол</p>
        <select name='select' onChange={toggleGenderFilterHandler}>
          <option value=''></option>
          <option value='male'>Мужской</option>
          <option value='female'>Женский</option>
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
          <option value={AgeTypes.ALL}></option>
          <option value={AgeTypes.YOUNG}>до 25</option>
          <option value={AgeTypes.ADULT}>26-59</option>
          <option value={AgeTypes.OLD}>60-79</option>
          <option value={AgeTypes.SUPERSTAR}>от 80</option>
        </select>
      </div>
    </div>
  )
};

export default Filter;
