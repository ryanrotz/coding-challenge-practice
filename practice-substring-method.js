// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// Replaces oldS with newS in the string fullS
function replaceString(oldS, newS, fullS) {
  for (var i = 0; i < fullS.length; ++i) {
    console.log(fullS[i + oldS.length]);
    if (fullS.substring(i, i + oldS.length) == oldS) {
      console.log(fullS.substring(0, i))
      console.log(i) // i is 10. i is "W" in "World"
      // return the whole string up until the "W" in "World"
      // +
      // the new string, "Web"
      // remove the last substring, "World", starting at 
      console.log(fullS.substring(i + oldS.length, fullS.length))
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}


// function replaceString(oldS, newS, fullS) {
//  var x = fullS.split(oldS);
//  x.join(newS);
//  return x;
//   //return fullS.split(oldS).join(newS);
// }

replaceString('World', 'Web', 'Brave New World');
