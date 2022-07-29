const getTheTitles = function(array) {

  const newArr = [];

  array.forEach(element => {
    newArr.push(element.title);
  });

  return newArr;

};


// Do not edit below this line
module.exports = getTheTitles;
