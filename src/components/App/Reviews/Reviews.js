import React, {useState} from 'react';
import ReviewsList from './ReviewsList/ReviewsList';
import Filter from './Filter/Filter';
import classes from './Reviews.module.css';
import {AgeValues} from 'constants/const';

const Reviews = (props) => {
  const [filteredGender, setFilteredGender] = useState('');
  const [filteredAge, setFilteredAge] = useState(AgeValues[0].value);
  const [filteredLike, setFilteredLike] = useState(false);

  const onSelectFilterHandler = (filteredGender) => {
    setFilteredGender(filteredGender);
  };

  const onSelectAgeHandler = (age) => {
    setFilteredAge(age.split(',').map(Number));
  };

  const onCheckedLikeHandler = (isLiked) => {
    setFilteredLike(isLiked);
  };

  const filteredReviews = props.items.filter((elem) => {
    const MIN = filteredAge[0];
    const MAX = filteredAge[1];

    return (
      (elem.gender === filteredGender || filteredGender === '') && (elem.age >= MIN && elem.age <= MAX) && (elem.liked === filteredLike || filteredLike === false)
    )
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
