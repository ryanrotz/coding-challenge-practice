Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


function XO(str) {
  
  xCount = 0;
  oCount = 0;
  
  // make string an array
  array = str.split('');
   // loop through array
   for(i = 0; i < array.length; i++) {
   // if character is x, add to counter
     if (array[i] === 'x' || array[i] === 'X') {
       xCount++
     } 
     else if(array[i] === 'o' || array[i] === 'O') {
       oCount++;
     }
   }
   console.log(xCount);
   console.log(oCount);
   if(xCount === oCount) {
    return true;
   } else {
    return false;
   }
}

XO('xxoo');




Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);