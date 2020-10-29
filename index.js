
//  Returns a [parts]-length array of equal or nearly equal
//  integers that add up to [num].
 
var splitInteger = function(num, parts) {
      var array = [];
      for (var i = 0; i < parts; ++i)
        array[i] = Math.floor(num / parts) + (i < num % parts);
      return array;
    }
// Test examples
    console.log(splitInteger(20, 6))  // returns [3, 3, 3, 3, 4, 4]
    console.log(splitInteger(10, 1)) // returns [10]
    console.log(splitInteger(2, 2)) // returns [1,1]
    console.log(splitInteger(20, 5)) // returns [4,4,4,4,4]
