let x1 = prompt('Give x1');
let y1 = prompt('Give y1');
let x2 = prompt('Give x2');
let y2 = prompt('Give y2');

let x = x2 - x1;
let y = y2 - y1;

let distance = Math.sqrt(x * x + y * y);

document.getElementById('result').innerHTML = 'Distance is ' + distance;
