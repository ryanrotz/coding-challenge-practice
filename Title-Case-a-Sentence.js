// Free Code Camp
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  var arr = str.split(" ");
  for(i=0; i<arr.length; i++) {
    var arr2 = [];
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().slice(1);
    str = arr.join(' ');
  }
  
  
  return str;
}

titleCase("I'm a little tea pot");