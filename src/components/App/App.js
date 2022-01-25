import React, {useEffect, useState} from 'react';
import classes from './App.module.css';
import Title from './Title/Title';
import NewReview from './NewReview/NewReview';
import Reviews from './Reviews/Reviews';

const DATA_URL = './reviews.json';

const App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(DATA_URL)
      .then(response => response.json())
      .then(result => setReviews(result))
  }, []);

  const getNextId = () => {
    return reviews.reduce(function(a,b)  {
      return (Math.max(a,b.id));
    },0) + 1;
  };

  const onFinalSaveData = (enterData) => {
    const actualData = {...enterData, id: getNextId()};
    setReviews([actualData, ...reviews]);
  };

  const deleteItemById = (id) => {
    const finalReviews = reviews.filter((elem) => {
      return (elem.id !== id);
    });
    setReviews(finalReviews);
  };

  const likedItemById = (id) => {
    const finalReviews = reviews.map((elem) => {
      if (elem.id === id) {elem.liked = !elem.liked}
      return elem;
    })
    setReviews(finalReviews);
  };

  return (
    <div className={classes.wrapper}>
      <Title />
      <NewReview finalSaveData={onFinalSaveData} />
      <Reviews items={reviews} passIdInApp={deleteItemById} passLikeInApp={likedItemById}/>
    </div>
  )
};

export default App;
