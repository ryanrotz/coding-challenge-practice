// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function willItBounce(value) {
    if ( (typeof(value) === 'string') && (value.length !== 0) ) {
      return value;
    }
    
    else if (value !== '' && value !== null && value !== 0 && value !== undefined && !isNaN(value)) {
      return value;
              }
    else {
      return false;
    }
  }
  
  var new_array = arr.filter(willItBounce);
  
  return new_array;
}


bouncer([7, "ate", 'sup', "", false, 9]);
