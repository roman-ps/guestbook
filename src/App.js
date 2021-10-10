import './App.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import ReviewsList from './components/ReviewsList/ReviewsList';
import Subtitle from './components/Subtitle/Subtitle';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Title />
      <Form />
      <Subtitle />
      <ReviewsList data={props.data}/>
    </div>
  );
}

export default App;
