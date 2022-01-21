import React, {useState} from 'react';
import ReviewsList from './ReviewsList/ReviewsList';
import Filter from './Filter/Filter';
import classes from './Reviews.module.css';

const Reviews = (props) => {
  const [filteredGender, setFilteredGender] = useState('');
  const [filteredAge, setFilteredAge] = useState([0, 150]);
  const AgeTypes = {
    young: [0, 20],
    adult: [21, 50],
    old: [51, 65],
    superstar: [66, 150],
  };

  const onSelectFilterHandler = (filteredGender) => {
    setFilteredGender(filteredGender);
    console.log(filteredGender);
  };

  const onSelectAgeHandler = (age) => {
    setFilteredAge(AgeTypes[age]);
    console.log(filteredAge);
  }

  const filteredReviews = props.items.filter((elem) => {
    return ((elem.gender === filteredGender || filteredGender === '') && (elem.age < filteredAge[1] && elem.age > filteredAge[0]));
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
