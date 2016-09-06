// Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

// Create an object with key-value pairs like a: 1, A: 1, b: 2, B: 2
// loop through the string (for loop, while, for..in, forEach?)
// if str[i] is alphanumeric 
// change str[i] to obj(str[i]) (the value)

// you could also do a loop through 'A..Z' and use the index +1
// for(var i = A; i <= Z; i++) {
//   console.log(i);
// }

// var myObj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 10,
//   k: 11,
//   l: 12,
//   m: 13,
//   n: 14,
//   o: 15,
//   p: 16,
//   q: 17,
//   r: 18,
//   s: 19,
//   t: 20,
//   u: 21,
//   v: 22,
//   w: 23,
//   x: 24,
//   y: 25,
//   z: 26
// };



// var arr = [];
// var indices = [];
// var element = 'a';
// var idx = letArray.indexOf(element);

// while (idx != -1) {
//   indices.push(idx)
//   idx = letArray.indexOf(element, idx + 1);
// }
// console.log(indices); // this shows the index of a (and all the occurences if more than one)




function alphabetPosition(text) {

  var letArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var indices = [];

  text = text.toLowerCase();
  var textArray = text.split('');
  console.log(textArray);

  for(var i = 0; i < textArray.length; i++) {

    for(var j = 0; j < letArray.length; j++) {

      if(textArray[i] === letArray[j]) {
        console.log(textArray[i]);
        // enter code here that displays the indices of the letters
        // CHANGE ARRAY LENGTHS SO IT ACCOUNTS FOR THE 0
        indices.push(j + 1)
        var newString = indices.join(' ');
      } 
      // else {
      //   return "";
      // }
    }
  };

  return newString;
};

console.log(alphabetPosition("%0!$-}-_"));


// other way of writing it
// function alphabetPosition(text) {
//   var result = "";
//   for (var i = 0; i < text.length; i++){
//     var code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " ";
//   }
//   // console.log(typeof(result));
//   return result.slice(0, result.length-1);
// }

// console.log(alphabetPosition('hello'));






// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");