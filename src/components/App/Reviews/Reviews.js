import React, {useState} from 'react';
import ReviewsList from './ReviewsList/ReviewsList';
import Filter from './Filter/Filter';

const Reviews = (props) => {
  const [filteredSex, setFilteredSex] = useState('');

  const onSelectFilterHandler = (selectedSex) => {
    setFilteredSex(selectedSex);
  };

  const filteredReviews = props.items.filter((elem) => {
    return (elem.sex === filteredSex || filteredSex === '');
  });

  return (
    <div>
      <Filter selectFilterHandler={onSelectFilterHandler} />
      <ReviewsList items={filteredReviews} />
    </div>
  )
};

export default Reviews;
