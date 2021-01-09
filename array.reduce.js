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
    console.log('self-defined Array.prototype.reduce function');

    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    let value, k = 0;

    let Obj = Object(this);
    let len = Obj.length >>> 0;

    // Assign initialValue to value if any
    // Cast error if we have both empty array and no initialValue 
    if (arguments.length >= 2) {
      value = arguments[1]; // initialValue
    } else {
      // TODO: check this part of logic
      while (k < len && !(k in Obj)) {
        k++;
      }

      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }

      value = Obj[k++];
    }

    // Repeat, while k < len
    while (k < len) {
      if (k in Obj) {
        value = callback.call(null, value, Obj[k], k, Obj);
      }

      k++;
    }

    return value;
  }
});

//---------------
// TEST SECTION
//---------------
let sum = [5, 6, 7, 8].reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(`sum: ${sum}`);