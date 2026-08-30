let numbers = [];
let number = prompt('Enter a number or done');

while (number != 'done') {
  numbers.push(Number(number));
  number = prompt('Enter a number or done');
}

let result = '';

for (let n of numbers) {
  if (n % 2 == 0) {
    result = result + n + ' ';
  }
}

document.getElementById('result').innerHTML = 'Even numbers: ' + result;
