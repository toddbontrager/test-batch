var without = function(array, value){
  var results = array.slice();
  var argSource = Array.prototype.slice.call(arguments);
  var args = argSource.slice(1, argSource.length);
  _.each(results, function(val, index){
    _.each(args, function(valArg){
      if (val === valArg){
        console.log(index);
      	results.splice(index, 1);
      }
    });
  });
	return results;
};

//tested with this
var nums =[0,1,2,3,4,5,6,7,8,9,10,20];
var test = without(nums, 1,4,9,10);

//expected [0, 2, 3, 5, 6, 7, 8, 20]
//but was returned [0, 2, 3, 5, 6, 7, 8, 10, 20]
//when two consecutive values are given as paramaters, the second one does not get removed from the array.
//I think it has to do with the .splice(index,1) call.

//I think I found the solution:
//if the results array is larger than the args array, the second _.each function won't iterate through the entire list.
//to fix this, swap lines 5 & 6.
