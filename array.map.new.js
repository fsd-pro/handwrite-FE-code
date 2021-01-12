'use strict';

Array.prototype.map = function(callback) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  let retArr, i;

  // let array be object, this refers to the input array
  let Obj = Object(this);
  // retrieve array length, >>> operator guarantees we got a number format of length
  let len = Obj.length >>> 0;

  // initialize retArr and i
  retArr = new Array(len);
  i = 0;

  while (i < len) {
    let value, mappedValue;

    if (i in Obj) {
      value = Obj[i];
      mappedValue = callback.call(null, value);

      retArr[i] = mappedValue;
    }

    i++;
  }

  return retArr;
};

const arr = [3, 4, 5].map(x => x * 2);
console.log(arr);