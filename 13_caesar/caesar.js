const caesar = function(text, movement) {

  if(movement > 25){
    movement = movement % 26;
  }
  let caesarCypher = '';
  for(let i = 0; i < text.length; i++){
    if((text.charAt(i) >= 'a' && text.charAt(i) <= 'z')){
      
      if(text.charCodeAt(i) + movement > 122){
        let placesToTheEnd = 122 - text.charCodeAt(i);
        caesarCypher += String.fromCharCode(97 + movement - placesToTheEnd - 1);
      } else if(text.charCodeAt(i) + movement < 97){
        let placesToTheEnd = text.charCodeAt(i) - 97;
        caesarCypher += String.fromCharCode(122 + movement + placesToTheEnd + 1);
      } else {
        caesarCypher += String.fromCharCode(text.charCodeAt(i) + movement);
      }
    } else if((text.charAt(i) >= 'A' && text.charAt(i) <= 'Z')){
      if(text.charCodeAt(i) + movement > 90){
        let placesToTheEnd = 90 - text.charCodeAt(i);
        caesarCypher += String.fromCharCode(65 + movement - placesToTheEnd - 1);
      } else if(text.charCodeAt(i) + movement < 65){
        let placesToTheEnd = text.charCodeAt(i) - 65;
        caesarCypher += String.fromCharCode(90 + movement + placesToTheEnd + 1);
      } else {
        caesarCypher += String.fromCharCode(text.charCodeAt(i) + movement);
      }
    } else {
      caesarCypher += String.fromCharCode(text.charCodeAt(i));
    }
    
  }

  return caesarCypher;
};


// Do not edit below this line
module.exports = caesar;
