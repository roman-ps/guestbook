import React, {useState} from 'react';
import classes from './App.module.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import ReviewsList from './components/ReviewsList/ReviewsList';
import Subtitle from './components/Subtitle/Subtitle';

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
