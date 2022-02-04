const AgeValues = [
  {value: [0, 150], content: ''},
  {value: [0, 25], content: 'до 25'},
  {value: [26, 59], content: '26 - 59'},
  {value: [60, 79], content: '60 - 79'},
  {value: [80, 150], content: 'от 80'},
];

const GenderValues = [
  {value: '', content: ''},
  {value: 'male', content: 'Мужской'},
  {value: 'female', content: 'Женский'}
];

const GenderType = {
  male: 'Мужской',
  female: 'Женский',
  unknown: 'Неизвестный',
};

const GenderClasses = {
  male: 'gender-male',
  female : 'gender-female',
  unknown: 'gender-unknown',
};

export {GenderType, GenderClasses, AgeValues, GenderValues};
