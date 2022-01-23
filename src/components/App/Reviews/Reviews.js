import React, {useState} from 'react';
import ReviewsList from './ReviewsList/ReviewsList';
import Filter from './Filter/Filter';
import classes from './Reviews.module.css';
import {AgeTypes} from '../../../const';

const Reviews = (props) => {
  const [filteredGender, setFilteredGender] = useState('');
  const [filteredAge, setFilteredAge] = useState(AgeTypes.ALL);

  const onSelectFilterHandler = (filteredGender) => {
    setFilteredGender(filteredGender);
  };

  const onSelectAgeHandler = (age) => {
    setFilteredAge(age.split(','));
  };

  const filteredReviews = props.items.filter((elem) => {
    const min = filteredAge[0];
    const max = filteredAge[1];

    return ((elem.gender === filteredGender || filteredGender === '') && (elem.age < max && elem.age > min));
  });

  const saveIdInReviews = (id) => {
    props.passIdInApp(id);
  };

  return (
    <main className={classes.main}>
      <h2 className={classes.title}>Reviews</h2>
      <Filter selectGenderFilterHandler={onSelectFilterHandler} selectAgeFilterHandler={onSelectAgeHandler}/>
      <ReviewsList passIdInReviews={saveIdInReviews} items={filteredReviews} />
    </main>
  )
};

export default Reviews;
