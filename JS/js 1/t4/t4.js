let score = prompt('Enter your score');

let grade;

if (score < 40) {
  grade = 0;
} else if (score < 52) {
  grade = 1;
} else if (score < 64) {
  grade = 2;
} else if (score < 76) {
  grade = 3;
} else if (score < 88) {
  grade = 4;
} else {
  grade = 5;
}

document.getElementById('result').innerHTML = 'Your grade is ' + grade;
