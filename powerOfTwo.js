//use this function to test if a number is a power of 2

var powerOfTwo = function(num) {
  if (num < 1){return false;}
  if (num / 2 === 1){
    return true;
  } else {
  return powerOfTwo(num/2);
  }
};
