// Free Code Camp
// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  var arr2 = [];
  for(i=0; i<arr.length; i++) {
    for(j=0; j<arr[i].length+1; j++) {
      if (arr[i][0] <= arr[i][1]) {
        arr[i].shift(arr[i][0]);
      } else if (arr[i][0] > arr[i][1]) {
        arr[i].splice(1,1);
      }
    }
      var num = arr[i][0]
      arr2.push(num);
      console.log(arr2)
  }
  return arr2;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

