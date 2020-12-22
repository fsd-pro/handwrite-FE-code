'use strict';

/**
 * @param {*} arr array
 * @param {*} start start index
 * @param {*} middle middle index
 * @param {*} end end index
 */
const merge = (arr = [], start, middle, end) => {
  // find the lengths of left and right arrays
  let n1 = middle - start + 1;
  let n2 = end - middle;

  // declare temp left and right array, and put elements into them seperately
  let Left = [];
  let Right = [];

  for (let i = 0; i < n1; i++) {
    Left[i] = arr[start + i];
  }
  for (let j = 0; j < n2; j++) {
    Right[j] = arr[middle + 1 + j];
  }

  //-------------------------------
  // Merge the left and right array
  //-------------------------------
  let i = 0;     // index of left array
  let j = 0;     // index of right array
  let k = start; // index of sorted array

  while (i < n1 && j < n2) {
    // [PROBLEM:] compare the left array and right array
    if (Left[i] <= Right[j]) {
      arr[k] = Left[i];
      i++;
    } else {
      arr[k] = Right[j];
      j++;
    }
    k++;
  }

  // if we still have elements inside left or right array, we put them into arr[k]
  while (i < n1) {
    arr[k] = Left[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = Right[j];
    j++;
    k++;
  }
};

/**
 * @param {*} arr original array
 * @param {*} start start index
 * @param {*} end end index
 */
const mergeSort = (arr = [], start, end) => {
  if (start < end) {
    // find the middle index of array
    // (start + end) / 2 could be a decimal, therefore we utilize Math.floor to handle it
    let middle = Math.floor((start + end) / 2);

    // sort left and right halves of the array
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);

    // merge the sorted array
    merge(arr, start, middle, end);
  }
};

//--------------
// TEST SECTION
//--------------
let arr = [1, 3, 2, 4, 8, 6, 7, 5];
console.log('Original Array: ');
console.log(arr);

mergeSort(arr, 0, arr.length - 1);
console.log('Sorted Array: ');
console.log(arr);