# kata-Almost-Even

Description:
-
We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Example code:

splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the parts, there is only one valid solution for each input to your function!

(Also, there is no reason to test for edge cases: the input to your function will always be valid for this kata.)







Test Cases:
-
      var testIt = function(n, p, arr) {
          Test.assertSimilar(splitInteger(n, p).sort(), arr.sort(), 'Input was '+n+' divided into '+p+' parts.');
        };

        describe('Simple Functionality', function() {
          it('should handle easy cases', function() {
            testIt(10, 1, [10]);
            testIt(2, 2, [1,1]);
            testIt(20, 5, [4,4,4,4,4]);
          });
        });
        describe('Uneven Tests', function() {
          it('should handle unequal inputs', function() {
            testIt(20, 6, [3,3,3,3,4,4]);
            testIt(11, 3, [3,4,4]);
          });
        });
        describe('Big Tests', function() {
          it('should handle big inputs', function() {
            var bo = [], i, s = 4;
            for(i=0; i<37; i++) {
              bo.push(108+((i<s)?1:0));
            }
            testIt(4000, 37, bo);
          });
        });
        describe('Random Tests', function() {
          it('should handle random cases', function() {
            var sum = function(s,v){ return s+v; };
            for(var i=0; i<3; i++) {
              var total = 1+Math.floor(20*Math.random()),
                  split = Math.floor(total*Math.random()),
                  baseUnit = 1+Math.floor(17*Math.random()),
                  arr = [];
              for(var j=0; j<total; j++) {
                arr.push(baseUnit+(j<split?0:1));
              }
              var s = arr.reduce(sum);
              testIt(s, total, arr);
            }
          });
        });
