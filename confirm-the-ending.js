// Free Code Camp
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


function confirmEnding(str, target) {
// Loop through each letter in the string. 
  for(var i = 0; i < str.length; i++) {
    // console.log(i)
    // console.log(str[i])
    console.log(str.substr(i));
    // console.log(target)
    if (str.substr(i, str.length) == target) {
      return true;
    } 
  }
  // this must be outside the loop. Otherwise it starts at after the first loop. You need to wait until it finishes the loop to decide if it's true or false.
  return false;
}

confirmEnding("Bastian", "n");
// Next time it might be faster to start the loop from the end of the string instead of the beginning.