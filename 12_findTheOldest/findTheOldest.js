const findTheOldest = function(people) {

  const date = new Date();

  let oldest = {
    name: "",
    yearOfBirth: 0,
    yearOfDeath: 0,
    age: 0
  }
  
  people.forEach(element => {
    if(typeof element.yearOfDeath === 'undefined'){
      element.yearOfDeath = date.getFullYear();
    }
    if((element.yearOfDeath - element.yearOfBirth) > oldest.age){
      oldest.name = element.name;
      oldest.yearOfBirth = element.yearOfBirth;
      oldest.yearOfDeath = element.yearOfDeath;
      oldest.age = element.yearOfDeath - element.yearOfBirth;
    }
  });

  return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
