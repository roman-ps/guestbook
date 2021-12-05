import React, {useState} from 'react';
import classes from './App.module.css';
import Title from './Title/Title';
import Form from './Form/Form';
import Subtitle from './Subtitle/Subtitle';
import Reviews from './Reviews/Reviews';

const reviewsAll = [
  {
    name: 'Роман',
    mail: 'roman@gmail.com',
    city: 'Samara',
    text: 'tiogjtogjotij jthoijt r ojtohi jrtoihjrtio jroti jrtij ohi',
    sex: 'Мужской',
    id: 1,
  },
  {
    name: 'Катенька',
    mail: 'katya@gmail.com',
    city: 'Samara',
    text: '5675756 56756 r 567567 8797897 jroti 5464 ohi',
    sex: 'Женский',
    id: 2,
  },
  {
    name: 'Сергей',
    mail: 'sergey@gmail.com',
    city: 'SergTown',
    text: '989808 jthoijt r 657575 67869789 jroti jrtij ohi',
    sex: 'Мужской',
    id: 3,
  },
  {
    name: 'Касиопея',
    mail: 'kas@gmail.com',
    city: 'Pompei',
    text: 'tiogjtogjotij jthoijt r hjkhjkhj uiouiou jroti uiouiou ohi',
    sex: 'Женский',
    id: 4,
  },
];

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
      <Subtitle />
      <Reviews items={reviews}/>
    </div>
  );
};

export default App;
