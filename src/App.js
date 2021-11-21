import classes from './App.module.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import ReviewsList from './components/ReviewsList/ReviewsList';
import Subtitle from './components/Subtitle/Subtitle';

const reviews = [
  {
    name: 'Roman',
    mail: '3453453@54645.com',
    city: 'Samara',
    text: 'Id love it',
  }
];

const App = () => {
  const onSaveData = (data) => {
    const enterData = {
      ...data,
      id: Math.random().toString(),
    };
    console.log(enterData);
  }
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
