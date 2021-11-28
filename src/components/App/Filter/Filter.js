import React, {useState} from 'react';
import classes from './Filter.module.css';

const Filter = (props) => {
  const [filter, setFilter] = useState('');

  const selectHandler = (evt) => {
    setFilter(evt.target.value);
    props.filterList(filter);
  };


  return (
    <div className={classes.filter}>
      <p className={classes.title}>Фильтр</p>
      <select name='select' onChange={selectHandler}>
        <option value=''></option>
        <option value='Мужской'>Мужской</option>
        <option value='Женский'>Женский</option>
      </select>
    </div>
  )
};

export default Filter;
