'use strict';

Object.defineProperty(Array.prototype, 'reduce', {
  value: function(callback) {
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    let value, i = 0;

    let Obj = Object(this); // this refers to original array
    let len = Obj.length >>> 0; // retrieve arguments length

    // retrieve value from initialValue or original array
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      value = Obj[i++];
    }

    if (typeof value === 'undefined') {
      throw new TypeError('Reduce cannot be executed on empty array with no initial value');
    }

    while (i < len) {
      if (i in Obj) {
        value = callback.call(null, value, Obj[i], i, Obj);
      }
      i++;
    }

    return value;
  }
});

//---------------
// TEST SECTION
//---------------
let newArr = [1, 2, 3, 4].reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(newArr);