// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

function getCount(str) {
  var vowelsCount = 0;
  
// use a string method to see if the string includes a vowel OR
// loop through string
// if so, add 1 to counter

  var i = 0;
  while(i <= str.length-1) {
    console.log(str[i]);
    // switch(str[i]) {
    //   case ("a" || "A"):
    //     vowelsCount++;
    //     break;
    //   case ("e" || "E"):
    //     vowelsCount
    // }
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
      vowelsCount++;
    } 
    i++
  }
  return vowelsCount;
}

console.log(getCount('ateAiuto'));

// in terminal, type, node vowelcount.js



// describe("Case 1", function(){
//     it ("should be defined", function(){
//         Test.assertEquals(getCount("abracadabra"), 5)
//     });
// });