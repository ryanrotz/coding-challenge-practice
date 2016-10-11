// From Free Code Camp
// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number

function findLongestWord(str) {
// Split the string into an array
  var arr = str.split(" ");
// Loop through the array
  //for (i = 0; i < arr.length; i++) {
  while (arr.length > 1) {
   if (arr[0].length <= arr[1].length) {
     //console.log('before ' + i);
     console.log("arr[0] is " + arr[0]);
     console.log('arr[1] is ' + arr[1]);
     var shifted = arr.shift();
     console.log(shifted + ' was shifted');
     //console.log(i)

   } else if (arr[0].length > arr[1].length) {
    // console.log('before ' + i);
    var spliced = arr.splice(1, 1);
    console.log(spliced + ' was spliced');
    // console.log(i)
   } 
  }
  str = arr.join('');
  
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
