import React, {useState} from 'react';
import classes from './App.module.css';
import Title from './Title/Title';
import NewReview from './NewReview/NewReview';
import Reviews from './Reviews/Reviews';

const reviewsAll = [];

const App = () => {
  const [reviews, setReviews] = useState(reviewsAll);

  const getNextId = () => {
    return reviews.reduce(function(a,b)  {
      return (Math.max(a,b.id));
    },0) + 1;
  };

  const onFinalSaveData = (enterData) => {
    const actualData = {...enterData, id: getNextId()};
    setReviews([actualData, ...reviews]);
  };

  return (
    <div className={classes.wrapper}>
      <Title />
      <NewReview finalSaveData={onFinalSaveData} />
      <Reviews items={reviews} />
    </div>
  );
};

export default App;
