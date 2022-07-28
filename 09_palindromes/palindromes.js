const palindromes = function (input) {
  
  let clear = input.replace(/[^A-Za-z0-9]/g, '');
  clear = clear.toLowerCase();


  for(i = 0; i < clear.length; i++){
    if(clear[i] != clear[clear.length -1 - i]){
      return false;
    }
  };

  return true;
};


// Do not edit below this line
module.exports = palindromes;
