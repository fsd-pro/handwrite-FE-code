'use strict';

const partition = (arr = [], start, end) => {
  let pivot  = arr[end]; // always make last element become pivot
  let pIndex = start;    // initialize pIndex with start index

  for (let i = start; i < end; i++) {
    // put elements less than pivot to the left positions
    if (arr[i] < pivot) {
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

    // sort elements before and after pIndex element
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
  }
};

//----------------
// TEST SECTION
//----------------
let arr = [2, 3, 1, 4, 5, 7, 6];
console.log('Original Array: ');
console.log(arr);

quickSort(arr, 0, arr.length - 1);
console.log('Sorted Array: ');
console.log(arr);