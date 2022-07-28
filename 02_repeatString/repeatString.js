const repeatString = function(repeatedString, repeatTimes) {

  if(repeatTimes < 0){
    return 'ERROR';
  }
  let repeat = '';
  for(let i = 0; i < repeatTimes; i++){
    repeat += repeatedString;
  }

  return repeat;
};

// Do not edit below this line
module.exports = repeatString;
