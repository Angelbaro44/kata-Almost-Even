
//  Returns a [parts]-length array of equal or nearly equal
//  integers that add up to [num].
 
var splitInteger = function(num, parts) {
      var array = [];
      for (var i = 0; i < parts; ++i)
        array[i] = Math.floor(num / parts) + (i < num % parts);
      return array;
    }