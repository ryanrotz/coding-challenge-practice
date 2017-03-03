
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  // Loop over Array
  for(var i=0; i<collection.length; i++){
      // loop through objects using for...in and hasOwnProperty
      var obj = collection[i];
      for(var key in obj){
        console.log(obj[key]);
        // see if the current object is similar/contains the 'source' object
        if(obj[key] == 'Capulet'){
          arr.push(obj)
        }
      }
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });