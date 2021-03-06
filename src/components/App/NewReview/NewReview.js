import React, {useState, Fragment} from 'react';
import classes from './NewReview.module.css';
import Form from './Form/Form';

const NewReview = (props) => {
  const [formEdit, setFormEdit] = useState(false);

  const enableFormEdit = () => {
    setFormEdit(true);
  };

  const onSaveData = (enterData) => {
    props.finalSaveData(enterData);
  };

  return (
    <Fragment>
      {formEdit
      ? <Form state={setFormEdit} saveData={onSaveData} />
      : <button className={classes.btn} onClick={enableFormEdit}>Добавить новый отзыв</button>}
    </Fragment>
  )
};

export default NewReview;
