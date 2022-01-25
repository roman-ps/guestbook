import React, {useState} from 'react';
import ReviewsList from './ReviewsList/ReviewsList';
import Filter from './Filter/Filter';
import classes from './Reviews.module.css';
import {AgeTypes} from '../../../const';

const Reviews = (props) => {
  const [filteredGender, setFilteredGender] = useState('');
  const [filteredAge, setFilteredAge] = useState(AgeTypes.ALL);
  const [filteredLike, setFilteredLike] = useState('');

  const onSelectFilterHandler = (filteredGender) => {
    setFilteredGender(filteredGender);
  };

  const onSelectAgeHandler = (age) => {
    setFilteredAge(age.split(','));
  };

  const onCheckedLikeHandler = (bool) => {
    setFilteredLike(bool);
  }

  const filteredReviews = props.items.filter((elem) => {
    const MIN = filteredAge[0];
    const MAX = filteredAge[1];

    return (
      (elem.gender === filteredGender || filteredGender === '') && (elem.age < MAX && elem.age > MIN) && (elem.liked === filteredLike || filteredLike === '')
      );
  });

  const saveIdInReviews = (id) => {
    props.passIdInApp(id);
  };

  const saveLikeInReviews = (id) => {
    props.passLikeInApp(id);
  };

  return (
    <main className={classes.main}>
      <h2 className={classes.title}>Reviews</h2>
      <Filter selectGenderFilterHandler={onSelectFilterHandler} selectAgeFilterHandler={onSelectAgeHandler} checkedLikeHandler={onCheckedLikeHandler}/>
      <ReviewsList passIdInReviews={saveIdInReviews} passLikeInReviews={saveLikeInReviews} items={filteredReviews} />
    </main>
  )
};

export default Reviews;
