import React, {useState} from 'react';
import classes from './NewReview.module.css';
import Form from './Form/Form';

const NewReview = (props) => {
  const [formEdit, setFormEdit] = useState(false);

  const toggleFormVisible = () => {
    setFormEdit(!formEdit);
  };

  const onSaveData = (enterData) => {
    props.finalSaveData(enterData);
  };

  return (
    <div>
      {formEdit
      ? <Form state={setFormEdit} saveData={onSaveData} />
      : <button className={classes.btn} onClick={toggleFormVisible}>Добавить новый отзыв</button>}
    </div>
  )
};

export default NewReview;
