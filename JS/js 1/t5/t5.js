let number = prompt('Enter a positive number');

let sum = 0;

for (let i = 1; i <= number; i++) {
  sum = sum + i;
}

document.getElementById('result').innerHTML = 'Sum is ' + sum;
