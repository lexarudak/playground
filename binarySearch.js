const find = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    if (arr[middle] === target) {
      return middle
    }

    if (arr[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return -1
}

console.log(find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));