//creates an arry of all prime numbers from 1 to num.

var primechecker = function(num){
  var result = true;
  for (var i = (num-1); i >= 2; i--) {
   if (num % i === 0) {
     result = false;
    }
  }
  return result;
};

var primeArr = function(num) {
  var results = [];
  for (var i = num; i >= 1; i--) {
    var isPrime = primechecker(i);
    if (isPrime) {
      results.unshift(i);
    }
  }
  return results;
};
