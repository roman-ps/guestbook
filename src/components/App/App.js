import React, {useState} from 'react';
import classes from './App.module.css';
import Title from './Title/Title';
import Form from './Form/Form';
import ReviewsList from './ReviewsList/ReviewsList';
import Subtitle from './Subtitle/Subtitle';
import Filter from './Filter/Filter';

const reviewsAll = [];

const App = () => {
  const [reviews, setReviews] = useState(reviewsAll);

  const getNextId = () => {
    return reviews.reduce(function(a,b)  {
      return (Math.max(a,b.id));
    },0) + 1;
  };

  // const FilterList = (option) => {
  //   return reviews.filter((elem) => {
  //     return elem.sex === option;
  //   })
  // }

  const onSaveData = (enterData) => {
    const actualData = {...enterData, id: getNextId()};
    setReviews([actualData, ...reviews]);
  };

  const onFilterList = (option) => {
    const filterList = reviews.filter((elem) => elem.sex === option);
    console.log(reviews)
    setReviews(filterList);
  };

  return (
    <div className={classes.wrapper}>
      <Title />
      <Form saveData={onSaveData}/>
      <Subtitle />
      <Filter filterList={onFilterList}/>
      <ReviewsList items={reviews}/>
    </div>
  );
};

export default App;
