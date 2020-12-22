'use strict';

const merge = (arr = [], start, middle, end) => {
  // find lengths of left half of array and right half of array
  let n1 = middle - start + 1;
  let n2 = end - middle;

  // declare temp left and right array
  let Left = [];
  let Right = [];

  // put elements into temp arrays
  for (let i = 0; i < n1; i++) {
    Left[i] = arr[start + i];
  }
  for (let j = 0; j < n2; j++) {
    Right[j] = arr[middle + 1 + j];
  }

  //-------------------------
  // merge the two temp array
  //-------------------------
  let i = 0;     // index of left half
  let j = 0;     // index of right half
  let k = start; // index of sorted array

  while (i < n1 && j < n2) {
    if (Left[i] <= Right[j]) {
      arr[k] = Left[i];
      i++;
    } else {
      arr[k] = Right[j];
      j++;
    }
    k++;
  }

  // if we still have elements left
  // [PROBLEM 1]: WE CHECK ELEMENTS EXIST BY INDEX
  // eg: i < n1 or i < n2
  while (i < n1) {
    arr[k] = Left[i];
    k++;
    i++;
  }

  while (j < n2) {
    arr[k] = Right[j];
    k++;
    j++;
  }
};

const mergeSort = (arr = [], start, end) => {
  if (start < end) {
    // find middle index
    // [PROBLEM 2]: middle = (start + end) / 2
    // eg: (0 + 10) / 2 = 5
    let middle = Math.floor((end + start) / 2);

    // merge left and right halves of the array
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);

    // merge the two sorted array
    merge(arr, start, middle, end);
  }
};

//-------------
// TEST SECTION
//-------------
let arr = [1, 3, 2, 4, 5, 7, 6];
console.log('Original Array: ');
console.log(arr);

mergeSort(arr, 0, arr.length - 1);
console.log('Sorted Array: ');
console.log(arr);