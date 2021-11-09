const DATA = [];

const getNextId = () => {
  return DATA.reduce(function(a,b) {
    return (Math.max(a,b.id) + 1)
  }, 0);
};

export {DATA, getNextId}
