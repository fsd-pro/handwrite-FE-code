'use strict';

Array.prototype.filter = function(callback) {
  if (this == null) {
    throw new TypeError('this cannot be null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  let retArr, i = 0, j = 0;

  let Obj = Object(this);
  let len = Obj.length >>> 0;

  retArr = new Array(len); // preallocate array

  while (i < len) {
    let value;
  
    if (i in Obj) {
      value = Obj[i]; // in case Obj is changed in callback 
      if (callback.call(null, Obj[i], i, Obj)) {
        retArr[j++] = value;
      }
    }

    i++;
  }

  retArr.length = j; // shrink down array to proper size
  return retArr;
};

//---------------
// TEST SECTION
//---------------
let newArray = [1, 2, 3, 4, 5].filter(x => x > 2);
console.log(newArray);