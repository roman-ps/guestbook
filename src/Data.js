const DATA = [
  {
    name: 'Roman',
    mail: '3453453@54645.com',
    city: 'Samara',
    text: 'Id love it',
  }
];

const getNextId = () => {
  return DATA.reduce(function(a,b) {
    return (Math.max(a,b.id) + 1)
  }, 0);
};

export {DATA, getNextId}
