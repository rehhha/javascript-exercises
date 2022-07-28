const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {

  let arraySum = 0;
	for(let i = 0; i < array.length; i++){
    arraySum += array[i];
  }

  return arraySum;
};

const multiply = function(array) {

  let multiples = 1;
  for(let i = 0; i < array.length; i++){
    multiples *= array[i];
  }

  return multiples;
};

const power = function(number, pow) {

  let numPow = 1;
	for(let i = 0; i < pow; i++){
    numPow *= number;
  }

  return numPow;
};

const factorial = function(number) {
	
  let fac = 1;

  for(let i = 1; i <= number; i++){
    fac *= i;
  }

  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
