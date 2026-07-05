// 1. WAF that searches for an element in an array && return the index, if the element is not present then return -1
function searchIndex(arr, target) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === target) {
      return i;
    }
  }
  return -1
}

const arr = [1, 2, 34, 3, 22]
let target = 3

console.log(searchIndex(arr, target))

// 2. WAF that returns count of negative number from an array
function countNegatives(arr) {
  let count = 0; 
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] < 0) {
      count = count + 1
    }
  }
  return count;
}


let arr = [2, -23, 31, -2, 334, -32]

console.log(countNegatives(arr))

// 3. WAF largest number in array 
function findLargestNum(arr) {
  let large = -Infinity;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > large) {
      large = arr[i]
    }
  }
  return large
}


let arr = [1, 2, -43, -2, 323, 32]
let res = findLargestNum(arr)
console.log(res)

// HW4. WAF to find smallest number in an array 
function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < large) {
      smallest = arr[i]
    }
  }
  return large
}


let arr = [1, 2, -43, -2, 323, 32]
let res = findSmallest(arr)
console.log(res)


// 4. find second largest number in an array
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    }
    else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
   return secondLargest
} 


let arr = [1, 2, -43, -2, 323, 32, 0, 323] // 32
let res = findSecondLargest(arr)
console.log(res)

