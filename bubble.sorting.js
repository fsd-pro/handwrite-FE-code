'use strict';

let origArray = [3, 2, 5, 1, 6, 4];

const bubbleSort = (arr = []) => {
  let sortedArray = [...arr];
  let len = sortedArray.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // swap sortedArray[j] and sortedArray[j + 1] if current number is greater than the adjancent number
      if (sortedArray[j] > sortedArray[j + 1]) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
};

let newArray = bubbleSort(origArray);

console.log('Original Array: ');
console.log(origArray);

console.log('New Array: ');
console.log(newArray);