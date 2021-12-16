import React, {useState} from 'react';
import classes from './NewReview.module.css';
import Form from './Form/Form';

const NewReview = (props) => {
  const [formState, setFormState] = useState(false);

  const toggleFormVisible = () => {
    setFormState(!formState);
  };

  const onSaveData = (data) => {
    return data;
  };

  return (
    <div>
      {formState
      ? <Form state={setFormState} saveData={onSaveData}/>
      : <button className={classes.btn} onClick={toggleFormVisible}>Добавить новый отзыв</button>}
    </div>
  )
};

export default NewReview;
