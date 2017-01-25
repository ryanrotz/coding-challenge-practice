// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// slice, filter, indexOf, concat

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr = arr1.concat(arr2);

  function isThereADouble(num) {
    // for(var i = 0; i < newArr.length; i++) {
      if(newArr.indexOf(num) === -1) {
        console.log(num);
        return num;
      // }
    }
  }
  
  filteredArr = newArr.filter(isThereADouble);
  
  
  return filteredArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);