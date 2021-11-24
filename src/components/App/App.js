import React, {useState} from 'react';
import classes from './App.module.css';
import Title from './Title/Title';
import Form from './Form/Form';
import ReviewsList from './ReviewsList/ReviewsList';
import Subtitle from './Subtitle/Subtitle';

const reviewsAll = [];

const App = () => {
  const [reviews, setReviews] = useState(reviewsAll);
  const onSaveData = (enterData) => {
    setReviews([enterData, ...reviews]);
  };

  return (
    <div className={classes.wrapper}>
      <Title />
      <Form saveData={onSaveData}/>
      <Subtitle />
      <ReviewsList items={reviews}/>
    </div>
  );
};

export default App;
