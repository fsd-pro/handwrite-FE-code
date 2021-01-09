'use strict';

// Basic
// Definition: The reduce() method executes a reducer function (that you provide) on each element of the array,
// resulting in single output value.
const arr = [1, 2, 3, 4];
const initialValue = 10;
const reducer = (accumulator, currentValue) => {
  return accumulator + currentValue;
};

let result = arr.reduce(reducer);
console.log(`result: ${result}`); // 10

result = arr.reduce(reducer, initialValue);
console.log(`result with initialValue: ${result}`); // 20

//------------
// Polyfill
//------------
Object.defineProperty(Array.prototype, 'reduce', {
  value: function(callback) {
    console.log('self defined Array.reduce function');
  }
});

//---------------
// TEST SECTION
//---------------
let sum = [5, 6, 7, 8].reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(`sum: ${sum}`);