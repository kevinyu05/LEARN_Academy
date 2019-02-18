// Javascript Iteration Challenges
// For to While
// Re-write the following as a while loop:
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var k = 0
// while (k < 10) {
//   console.log(k)
//   k++
// }

//
// What is the value of i after the loop? Is it the same in both cases?
//
// .. and Back
// var a = 10;
// while (a > 0) {
//   console.log(a);
//   a = a - 1;
// }

// Re-write the following as a for loop:
// for (let a = 10; a > 0; a--) {
//   console.log(a);
// }

// Is the value of a the same after the loop?
//
// Duplicate Array
// Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.

var arrayTest1 = [1, 2, 3]
var arrayTest2 = [2, 30, 1]

function mergeArray(arr1, arr2) {
  var combinedArray = arr1.concat(arr2)
  let removedDuplicates = []
  for (let i = 0; i < combinedArray.length; i++) {
    if (removedDuplicates.indexOf(combinedArray[i]) === -1) {
      removedDuplicates.push(combinedArray[i])
    }
  }
  return removedDuplicates
}

console.log(mergeArray(arrayTest1, arrayTest2)); // [1, 2, 3, 30]

function mergeArray(arr1, arr2) {
  var combinedArray = arr1.concat(arr2)
  let removedDuplicates = []
  for (i = 0; i < combinedArray.length; i++) {
    if (removedDuplicates.indexOf(combinedArray[i]) === -1) {
      //as shown above, === -1 is indicating if duplicates exist
      removedDuplicates.push(combinedArray[i])
      console.log(combinedArray[i] + " Doesn't exists in removed duplicates array so we added it");
    } else if (removedDuplicates.indexOf(i) !== -1) {
      console.log(combinedArray[i] + " Already exists in removed duplicates array so we don't add it");
      //as shown above, !== -1 is indicating if duplicates don't exist
    }
  }
  return removedDuplicates
}
mergeArray(arrayTest1, arrayTest2) //should return [1, 2, 3, 30]

// Order does not matter.
//
// Pre-fill
// Write a Javascript function called fillArray to create a specified number of elements with a pre-filled numeric value in an array.
// function array_filled(len, val){
//     return new Array(len).fill(val);
// }
// console.log(array_filled(6, 0));
//
// fillArray(6, 0) should return [0, 0, 0, 0, 0, 0]
// fillArray(4, 11) should return [11, 11, 11, 11]


function array_filled(len, val) {
  var newArray = []
  for (i = 0; i < len; i++) {
    newArray.push(val)
  }
  return newArray
}
console.log(array_filled(6, 0));
// Clean Function
// Write a Javascript function to filter false, null, 0 and blank values from an array.

// filterArrayValues([58, '', 'abcd', true, null, false, 0])
// should return [58, "abcd", true]
//
// Sum Target
// Write a Javascript function to find a pair of elements (indices of the two numbers) from a given array whose sum equals a specific target number.
//
// findPair(50, [10,20,10,40,50,60,70] should return [0, 3] or [2, 3] (one or the other or both)
// findPair(50, [25,25,10] should return [0, 1] or [1, 0] (but not both)
//
// Order does not matter.
