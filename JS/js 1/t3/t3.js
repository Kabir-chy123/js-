let a = prompt('First side');
let b = prompt('Second side');
let c = prompt('Third side');

if (a == b && b == c) {
  document.getElementById('result').innerHTML = 'Equilateral';
} else if (a == b || b == c || a == c) {
  document.getElementById('result').innerHTML = 'Isosceles';
} else {
  document.getElementById('result').innerHTML = 'Scalene';
}
