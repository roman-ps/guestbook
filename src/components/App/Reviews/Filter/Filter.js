import React from 'react';
import classes from './Filter.module.css';

const Filter = (props) => {
  const selectFilterHandler = (evt) => {
    props.selectFilterHandler(evt.target.value);
  };

  return (
    <div className={classes.filter}>
      <p className={classes.title}>Фильтр</p>
      <select name='select' onChange={selectFilterHandler}>
        <option value=''></option>
        <option value='Мужской'>Мужской</option>
        <option value='Женский'>Женский</option>
      </select>
    </div>
  )
};

export default Filter;
