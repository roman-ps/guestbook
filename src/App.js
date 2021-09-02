import './App.css';

import Title from './components/Title/Title';
import AddReview from './components/AddReview/AddReview';
import ReviewsList from './components/ReviewsList/ReviewsList';

const df = [1, 423, 53, 2, 4353, 33, '35', 3453, 453]

const App = () => {
  return (
    <div className='wrapper'>
      <Title />
      <AddReview />
      <ReviewsList />
    </div>
  );
}
console.log(...df)

export default App;
