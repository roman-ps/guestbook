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
        <p className={classes.title}>Возраст</p>
        <select name='select' onChange={toggleAgeFilterHandler}>
          <option value={AgeTypes.ALL}></option>
          <option value={AgeTypes.YOUNG}>до 20</option>
          <option value={AgeTypes.ADULT}>21-50</option>
          <option value={AgeTypes.OLD}>51-65</option>
          <option value={AgeTypes.SUPERSTAR}>от 66</option>
        </select>
      </div>
    </div>
  )
};

export default Filter;
