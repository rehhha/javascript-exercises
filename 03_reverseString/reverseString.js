const reverseString = function(inputString) {
  let outputString = '';

  for(i = inputString.length -1; i >= 0; i--){
    outputString += inputString[i];
  }

  return outputString;
};

// Do not edit below this line
module.exports = reverseString;
