function sortArray(numbers, order) {
  let newArray = [...numbers];

  if (order == 'asc') {
    newArray.sort((a, b) => a - b);
  } else if (order == 'desc') {
    newArray.sort((a, b) => b - a);
  }

  return newArray;
}

let numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
