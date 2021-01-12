'use strict';

Array.prototype.filter = function(func, thisArg) {
  if (this == null) {
    throw new TypeError('this cannot be null or undefined');
  }

  if (typeof func !== 'function') {
    throw new TypeError(func + ' is not a function');
  }

  let len = this.length >>> 0;
  let retArr = new Array(len); // preallocate array
  let t = this, c = 0, i = -1;

  let kValue;

  if (typeof thisArg === 'undefined') {
    while (++i !== len) {
      // check to see if the key was set
      if (i in this) {
        kValue = t[i]; // in case t is changed in callback
        if (func(t[i], i, t)) {
          retArr[c++] = kValue;
        }
      }
    }
  } else {
    while (++i !== len) {
      // check to see if the key was set
      if (i in this) {
        kValue = t[i];
        if (func.call(thisArg, t[i], i, t)) {
          retArr[c++] = kValue;
        }
      }
    }
  }

  retArr.length = c; // shrink down array to proper size
  return retArr;
};

//--------------
// TEST SECTION
//--------------
let newArr = [24, 12, 7, 4, 50].filter((value) => {
  return value >= 10;
});
console.log(newArr);