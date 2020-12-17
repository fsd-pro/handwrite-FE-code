'use strict';

const partition = (arr = [], start, end) => {
  let pivot = arr[end]; // always pick the last element as pivot
  let pIndex = start;

  // this process will put all the elements that are smaller than the pivot to
  // the left part of pIndex element
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      // swap current element with pIndex element
      let temp1 = arr[i];
      arr[i] = arr[pIndex];
      arr[pIndex] = temp1;

      pIndex++;
    }
  }

  // swap pIndex element with pivot (namely arr[end])
  let temp2 = arr[pIndex];
  arr[pIndex] = arr[end];
  arr[end] = temp2;

  return pIndex;
};

const quickSort = (arr = [], start, end) => {
  if (start < end) {
    // pIndex refers to partition index
    let pIndex = partition(arr, start, end);

    // sort the elements before pIndex
    quickSort(arr, start, pIndex - 1);

    // sort the elements after pIndex
    quickSort(arr, pIndex + 1, end);
  }
};

//----------------
// TEST SECTION
//----------------
let arr = [3, 2, 1, 5, 7, 8, 6, 4];
let len = arr.length - 1;

quickSort(arr, 0, len);

console.log('sorted array: ');
console.log(arr);