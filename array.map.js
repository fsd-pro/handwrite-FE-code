'use strict';

// Original Use Case
// Definition: the map() method creates a new array populated with the results of calling a provided function
// on every element in the calling array.
const newArr = [1, 2, 3].map(x => x * 2);
console.log(newArr); // [1, 2, 3] => [2, 4, 6]

//-----------
// Polyfill
//-----------
Array.prototype.map = function(callback/*, thisArg */) {
  let A, T, k;

  console.log('Execute Self-Defined Map Function');

  // this refers to the original array, namely [1, 2, 3]
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }

  let Obj = Object(this);

  // >>> operator converts Non-Numbers to Number
  // eg: let num = '100' >>> 0   =>   num = 100;
  // at this stage, we only need to know >>> operator guarantees that we got length in a number format
  let len = Obj.length >>> 0; // len is 3; [1, 2, 3].length => 3

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  // If thisArg was supplied, let T be thisArg; else let T be undefined.
  // At this time, arguments.length == 1
  if (arguments.length > 1) {
    T = arguments[1];
  }

  // Let A be a new array
  A = new Array(len); // [ <3 empty items> ]

  // Let K be 0
  k = 0;

  // Repeat, while k < len
  while (k < len) {
    let kValue, mappedValue;

    // in operator actually guarantees we iterate over every element is Obj, name [1, 2, 3]
    if (k in Obj) {
      kValue = Obj[k]; // each element in array

      mappedValue = callback.call(T, kValue, k, Obj); // apply callback to each array element

      A[k] = mappedValue; // assign current new value to array A
    }

    k++;
  }

  return A;
};

const plusOneArr = [1, 2, 3].map((value, index, array) => {
  // console.log(index); // 0, 1, 2
  // console.log(array); // [1, 2, 3]

  return value + 1;
});
console.log(plusOneArr);