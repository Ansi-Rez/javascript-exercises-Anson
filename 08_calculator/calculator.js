const add = function(numA,numB) {
  return numA + numB;
};

const subtract = function(numA,numB) {
	return numA - numB;
};

const sum = function(arr) {
  let sum = 0;
  if(arr.length !== 0)
  {
  for(let i = 0; i < arr.length; i++)
  {
    sum += arr[i];
  }
  return sum;
  }
  else
  {
    return sum;
  }
};

const multiply = function(arr) {
  let sum = 1;
  if(arr.length !== 0)
  {
  for(let i = 0; i < arr.length; i++)
  {
    sum *= arr[i];
  }
  return sum;
  }
  else
  {
    return sum - 1;
  }
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(num) {
  let sum = 1;
  if(num !== 0){
	for(let i = num; i > 0; i--)
  {
    sum *= i;
  }
  return sum;
  }
  else
  {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
