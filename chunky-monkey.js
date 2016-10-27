// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var outerArr = [];
  var innerArr = [];
  for (i = 0; i <= arr.length; i++) {
  if (arr.length > size) {
      
      // innerArr = arr.slice(0, size);
      innerArr = arr.splice(0, size);
      console.log("arr is " + arr);
      console.log("innerArr is " + innerArr);
      console.log(arr.length);
      outerArr.push(innerArr);
      if (arr.length <= size) {
      outerArr.push(arr);
      console.log('the left over array is ' + arr);
    }
  }
  }
  return outerArr;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
// should return [[0, 1, 2], [3, 4, 5], [6]]. 


// var someArr = [0, 1,];
// var otherArr = someArr.splice(0, 4);
// console.log(otherArr);