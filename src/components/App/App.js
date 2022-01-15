import React, {useState} from 'react';
import classes from './App.module.css';
import Title from './Title/Title';
import NewReview from './NewReview/NewReview';
import Reviews from './Reviews/Reviews';

const reviewsAll = [
  {
    "name": "Leanne Graham",
    "mail": "Sincere@april.biz",
    "city": "Gwenborough",
    "text": "Leanne Graham from Gwenborough",
    "gender": "Мужской",
    "id": 1
  },
  {
    "name": "Ervin Howell",
    "mail": "Shanna@melissa.tv",
    "city": "Wisokyburgh",
    "text": "Ervin Howell from Wisokyburgh",
    "gender": "Женский",
    "id": 2
  },
  {
    "name": "Clementine Bauch",
    "mail": "Nathan@yesenia.net",
    "city": "McKenziehaven",
    "text": "Clementine Bauch from McKenziehaven",
    "gender": "Женский",
    "id": 3
  },
  {
    "name": "Patricia Lebsack",
    "mail": "Julianne.OConner@kory.org",
    "city": "South Elvis",
    "text": "Patricia Lebsack from South Elvis",
    "gender": "Женский",
    "id": 4
  },
  {
    "name": "Mrs. Dennis Schulist",
    "mail": "Karl_Dach@jasper.info",
    "city": "South Christy",
    "text": "Mrs. Dennis Schulist from South Christy",
    "gender": "Мужской",
    "id": 5
  },
  {
    "name": "Kurtis Weissnat",
    "mail": "Telly.Hoeger@billy.biz",
    "city": "Howemouth",
    "text": "Kurtis Weissnat from Howemouth",
    "gender": "Мужской",
    "id": 6
  }
];

const DATA_URL = './reviews.json';

const App = () => {
  const [reviews, setReviews] = useState(reviewsAll);

  const loadData = () => {
    return fetch(DATA_URL)
      .then((response) => {
        return response.json
      })
      .then((data) => {
        setReviews(data);
      })
  };

  const getNextId = () => {
    return reviews.reduce(function(a,b)  {
      return (Math.max(a,b.id));
    },0) + 1;
  };

  const onFinalSaveData = (enterData) => {
    const actualData = {...enterData, id: getNextId()};
    setReviews([actualData, ...reviews]);
    loadData()
  };

  const deleteItemById = (id) => {
    const finalReviews = reviews.filter((elem) => {
      return (elem.id !== id);
    });
    setReviews(finalReviews);
  };

  return (
    <div className={classes.wrapper}>
      <Title />
      <NewReview finalSaveData={onFinalSaveData} />
      <Reviews items={reviews} passIdInApp={deleteItemById}/>
    </div>
  );
};

export default App;
