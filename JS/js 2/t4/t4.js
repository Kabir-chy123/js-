function sortArray(numbers) {
  let newArray = [...numbers];

  newArray.sort((a, b) => a - b);

  return newArray;
}

let numbers = [5, 2, 8, 1, 4];

console.log('Original array:', numbers);
console.log('sorted array:', sortArray(numbers));
