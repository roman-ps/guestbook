import React, {useState} from 'react';
import ReviewsList from './ReviewsList/ReviewsList';
import Filter from './Filter/Filter';
import classes from './Reviews.module.css';

const Reviews = (props) => {
  const [filteredSex, setFilteredSex] = useState('');

  const onSelectFilterHandler = (selectedSex) => {
    setFilteredSex(selectedSex);
  };

  const filteredReviews = props.items.filter((elem) => {
    return (elem.sex === filteredSex || filteredSex === '');
  });

  return (
    <main className={classes.main}>
      <h2 className={classes.title}>Reviews</h2>
      <Filter selectFilterHandler={onSelectFilterHandler} />
      <ReviewsList items={filteredReviews} />
    </main>
  )
};

export default Reviews;
