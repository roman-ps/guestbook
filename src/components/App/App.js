import React, {useState} from 'react';
import classes from './App.module.css';
import Title from './Title/Title';
import Form from './Form/Form';
import Reviews from './Reviews/Reviews';

const reviewsAll = [];

const App = () => {
  const [reviews, setReviews] = useState(reviewsAll);

  const getNextId = () => {
    return reviews.reduce(function(a,b)  {
      return (Math.max(a,b.id));
    },0) + 1;
  };

  const onSaveData = (enterData) => {
    const actualData = {...enterData, id: getNextId()};
    setReviews([actualData, ...reviews]);
  };

  return (
    <div className={classes.wrapper}>
      <Title />
      <Form saveData={onSaveData}/>
      <Reviews items={reviews}/>
    </div>
  );
};

export default App;
