import './App.css';
import Title from './components/Title/Title';
import AddReview from './components/AddReview/AddReview';
import ReviewsList from './components/ReviewsList/ReviewsList';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Title />
      <AddReview />
      <ReviewsList data={props.data}/>
    </div>
  );
}

export default App;
