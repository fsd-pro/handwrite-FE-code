// @ts-nocheck
/**
 * Several Approachs of Array Flatten
 */

const arr = [1, [2, [3, [4, 5]]], [6]];

// solution1: with array flat function
const newArr1 = arr.flat(Infinity);
console.log(newArr1);

// solution2: convert array to json string, then strip '[' or ']'
const newArr2 = JSON.stringify(arr)
                    .replace(/(\[|\])/g, '') // "1,2,3,4,5,6"
                    .split(','); // [ '1', '2', '3', '4', '5', '6' ]
console.log(newArr2); // [ '1', '2', '3', '4', '5', '6' ]

// solution3: convert array to json string, strip '[' or ']', and then convert back to json with JSON.parse()
const newArr3 = JSON.parse('[' + JSON.stringify(arr).replace(/(\[|\])/g, '') + ']');
console.log(newArr3); // [ 1, 2, 3, 4, 5, 6 ]

// solution4: recursively invoke a flatten function, concat element when element is not an array
const flatten = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};
const newArr4 = flatten(arr);
console.log(newArr4); // [ 1, 2, 3, 4, 5, 6 ]

// solution5: use a result array to collect element
// [1, [2, [3, [4, 5]]], [6]] => length is 3
const newArr5 = [];
const fn = (arr) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    Array.isArray(arr[i]) ? fn(arr[i]) : newArr5.push(arr[i]);
  }
};
fn(arr); // invoke function
console.log(newArr5);