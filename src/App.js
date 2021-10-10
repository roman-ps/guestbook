import './App.css';
import Title from './components/Title/Title';
import AddReview from './components/AddReview/AddReview';
import ReviewsList from './components/ReviewsList/ReviewsList';
import Subtitle from './components/Subtitle/Subtitle';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Title />
      <AddReview />
      <Subtitle />
      <ReviewsList data={props.data}/>
    </div>
  );
}

export default App;
