const add = function(a, b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let sum = a - b;
  return sum;
};

const sum = function(arr) {
	let sum = arr.reduce((total, item) => total + item, 0);
  return sum;
};

const multiply = function(arr) {
  let sum = arr.reduce((total, item) => total * item, 1);
  return sum;
};

const power = function(a, b) {
	let sum = a;
  for (let i = 1; i < b; i++) {
    sum = sum * a;
  }
  return sum;
};

const factorial = function(a) {
  let sum = 1;
  if (a === 0) {
    sum = 1; 
  } else {
    for(let i = 1; i <= a; i++) {
      sum = sum * i;
    }
  }
	    return sum;
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
