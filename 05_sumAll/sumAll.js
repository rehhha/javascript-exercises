const sumAll = function() {

  if(typeof arguments[0] != 'number' || typeof arguments[1] != 'number' ||
    arguments[0] < 0 || arguments[1] < 0){
    return 'ERROR';
  }

  let start = arguments[0],
      end = arguments[1],
      sum = 0;

  if(start > end){
    let temp = start;
    start = end;
    end = temp;
  }
  for(let i = start; i <= end; i++){
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
