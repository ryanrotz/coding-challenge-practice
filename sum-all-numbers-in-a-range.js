// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

// Here are some helpful links:

// Math.max()
// Math.min()
// Array.prototype.reduce()

function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var fullArr = [];

  for(var i = min; i <= max; i++) {
    fullArr.push(i);
  }
  console.log(fullArr);


  var sum = fullArr.reduce(function(a, b) {
      return a + b;
    }, 0)


  return sum;
}

sumAll([5, 10]);