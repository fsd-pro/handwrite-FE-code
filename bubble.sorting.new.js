'use strict';

/**
 * The main function that implements bubbleSort()
 * 
 * @param {*} arr original array
 */
const bubbleSort = (arr = []) => {
  let sortedArray = [...arr];
  let n = sortedArray.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // swap sortedArray[j] with sortedArray[j + 1] if the former is larger than the latter
      // we always put the largest number to the rightmost position
      if (sortedArray[j] > sortedArray[j + 1]) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
};

let arr = [4, 3, 2, 5, 1, 6, 7];
let sortedArray = bubbleSort(arr);

console.log('Origina Array: ');
console.log(arr);
console.log('Sorted Array: ');
console.log(sortedArray);