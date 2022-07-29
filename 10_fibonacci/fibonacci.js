const fibonacci = function(size) {
  size = parseInt(size);

  if(size < 0){
    return 'OOPS';
  }

  let previous = 0,
    current = 1;

  for(let i = 0; i < size; i++){
    let temp = previous + current;
    previous = current;
    current = temp;
  }

  return previous; 

};

// Do not edit below this line
module.exports = fibonacci;
