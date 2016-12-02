// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  //   make arguments into an array
  var array = Array.prototype.slice.call(arguments);
  array.splice(0, 1);

//   function matchIt(elem) {
// //     loop through arguments to see if they match what's inside the array/first argument
//     for(i=1; i<array.length; i++) {
//       if (elem !== array[i]) {
//         return arr[i];
//       }
//     }
//   }

  function matchIt(elem) {
    // both of these work:
      // return !array.includes(elem);
    return array.indexOf(elem) === -1;
  }

  var filteredArray = arr.filter(matchIt);

  
  return filteredArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
