let numbers = [];

numbers.push(Number(prompt('Enter number 1')));
numbers.push(Number(prompt('Enter number 2')));
numbers.push(Number(prompt('Enter number 3')));
numbers.push(Number(prompt('Enter number 4')));
numbers.push(Number(prompt('Enter number 5')));

console.log(numbers);

let search = Number(prompt('Enter a number to search'));

if (numbers.includes(search)) {
  console.log('Number found');
} else {
  console.log('Number not found');
}

numbers.pop();

console.log(numbers);

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
